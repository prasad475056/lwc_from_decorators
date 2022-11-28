public  class AccountRecordControllers 
{   
    @AuraEnabled(cacheable = true)
    public static list<Account> getAllAccounts() 
    {
        list<Account> lstAccount = [select id, name, rating, industry, annualrevenue, phone, fax, active__c
                                                                    from Account
                                                                            ORDER BY name];
        return lstAccount;

    }

    @AuraEnabled(cacheable = true)
    public static  list<Account> getLimitedAccounts() 
    {
        list<Account> lstAccount = [select id, name, rating, industry, annualrevenue, phone, fax, active__c
                                                                    from Account
                                                                            ORDER BY name  
                                                                                         limit 5];
        return lstAccount;

    }

    @AuraEnabled(cacheable = true)
    public static list<Account> searchAccountByName(string stringchars)
    {
        list<Account> lstAccounts = [select id, name, rating, industry, annualrevenue, phone, fax 
                                                          from Account 
                                                                where name like : stringchars+'%'];
        return lstAccounts;
    }

    @AuraEnabled(cacheable = true)
    public static list<Account> getAllAccountRecords()
    {
        list<Account> lstAccount = [select id, name, rating, industry, annualrevenue, phone, fax 
                                                                    from Account 
                                                                            ORDER BY name];
           return lstAccount;                                                  
    }
    

    
}
