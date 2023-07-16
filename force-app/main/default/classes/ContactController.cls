public with sharing class ContactController
{
	@AuraEnabled
    public static list<contact> getContacts()
    {
        List<contact> contacts = [select Id, Name, MailingStreet, Phone, Email,LeadSource From Contact];
        return contacts;
    }
}

// ContactController contains methods that return your contact data using SOQL statements. This Apex controller is wired
// up to your component in a later step. getContacts() returns all contacts with the selected fields.