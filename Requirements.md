Requirements:
1.REST API with parameter as startDate and endDate. The API need to return user transactions which will be displayed on the UI like below:

2. Angular application will call APIs to retrieve the transaction data.
Please sort the transactions by date filter out the transactions by status (if it is not equal to one of 'COMPLETED', 'IN PROGRESS' or 'REJECTED')

3. APIs to load the following data from Json file. Prefer use Mongo database.



TASK:

Express:
1. Create the API to fetch and return the data based on the input startDate and endDate
2. Add the filter options
3. Add the sort options


Angular:
1. List the User Trasactions in the view
    a. sort by date default
    b. Filter by not equal to 'COMPLETED', 'IN PROGRESS' or 'REJECTED'
2. Add the sort option to the fields
3. Add the filter options to the grid


dganech
6NwoQhtIwteIikHz

{
  $or: [
    {
      status: "COMPLETED"
    },
    {
      Country: "PENDING"
    }
  ]
}

db.dataProfTable.find({'uSN': '100030001', 'timetag': {$gte: 30072016, $lt: 01082016}})