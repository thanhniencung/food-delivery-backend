var admin = require("firebase-admin");

var serviceAccount = require("./food-delivery.json");

if (!admin.apps.length) {
    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
    });
}

exports.database = admin.firestore();