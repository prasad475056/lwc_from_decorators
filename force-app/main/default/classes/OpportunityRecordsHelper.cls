public  class OpportunityRecordsHelper 
{   
    @AuraEnabled(cacheable = true)
    public static List<Opportunity> getAllOpportunities()
    {
        list<Opportunity> lstoppty = [select id, Name, CloseDate, Amount, stageName
                                            from Opportunity limit 5];
       return lstoppty;
    }
}
