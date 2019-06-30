const fs = require("fs");
const path = require("path");

// this path needs to be relative to work with fs
const contactsLocation = "contacts.json";
const target = path.join(__dirname, contactsLocation);

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
    const contacts = fs.readFileSync(target, { encoding: "utf-8" });
    return JSON.parse(contacts);
};

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = contacts => {
    const json = JSON.stringify(contacts);
    fs.writeFileSync(target, json, { encoding: "utf-8" });
};

module.exports = {
    contactsLocation,
    getContacts,
    saveContacts
};
