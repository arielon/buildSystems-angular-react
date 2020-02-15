const firebaseConfig = {
    apiKey: "AIzaSyBDtABnRxJI78RIWEc4Qsb_CA5-c2vQobM",
    authDomain: "tienda-auth.firebaseapp.com",
    databaseURL: "https://tienda-auth.firebaseio.com",
    projectId: "tienda-auth",
    storageBucket: "tienda-auth.appspot.com",
    messagingSenderId: "6693868765",
    appId: "1:6693868765:web:67eb1cc8289fc67d887734"
};

class DB {

    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        this.db = firebase.database();

        this.setCollections();
    }

    setCollections() {
        this.users = [];
        this.products = [];

        let users = this.db.ref('user');

        users.orderByChild("id").on("child_added", (snapshot) => {
            this.users.push(snapshot.val());
        });

        let products = this.db.ref('product');

        products.orderByChild("id").on("child_added", (snapshot, prevId) => {
            this.products.push({
                ...snapshot.val(),
                id: snapshot.key,
                purchase: 1
            });
        });
    }

    existUser(user, pass) {
        let exist = false;
        this.users.forEach(u => {
            if (u.email == user && u.pass == pass) {
                exist = true;
            }
        });
        return exist;
    }

    filterProducts(filter) {
        if (!filter || filter.length == 0) {
            return this.products;
        }
        return this.products.filter(p => p.name.toUpperCase().startsWith(filter.toUpperCase()));
    }

    updateProducts(items) {
        if (items.length == 0) {
            return this.products;
        }
        this.setCollections();
        let productCollection = this.db.ref('product');

        items.forEach(o => {
            let id, c = this.products.find(f => f.name == o.name);
            if (c) {
                id = c.id;
                delete c.id;
                c.stock -= o.purchase;
                productCollection.child(id).set(c);
                c.id = id;
            }
        })
        return this.products.map(p => p);
    }
}

let db = new DB();


export default db;