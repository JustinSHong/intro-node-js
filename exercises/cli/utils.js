const fs = require("fs");
const path = require("path");

// this path needs to be relative to work with fs
const contactsLocation = "contacts.json";

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
    const target = path.join(__dirname, contactsLocation);
    const contacts = fs.readFileSync(target, { encoding: "utf-8" });
    console.log("target", target);
    console.log("contacts", JSON.parse(contacts));
    return JSON.parse(contacts);
};

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = contacts => {
    const target = path.join(__dirname, contactsLocation);
    const json = JSON.stringify(contacts);
    fs.writeFileSync(target, json, { encoding: "utf-8" });
};

module.exports = {
    contactsLocation,
    getContacts,
    saveContacts
};
