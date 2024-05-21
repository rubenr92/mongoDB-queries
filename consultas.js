{};
{filter:{}, projection:{'restaurant_id':1, 'name':1, 'borough':1, 'cuisine':1}};
{filter:{}, projection: {'_id':0,'restaurant_id':1, 'name':1, 'borough':1, 'cuisine':1}};
{filter:{borough:'Bronx'}, options: {skip:5, limit:5}};
{ "grades.score":{$gt:90}};
{grades: { $elemMatch: { score: { $gt: 80, $lte: 100 } }}};
{$or: [{cuisine:'American'}, {borough:'Bronx'}]};
{cuisine:{$ne:'American'}, "grades.score":{$gt:70},"address.coord.0":{$lt:-65.754168}}
{filter:{cuisine:{$ne:'American'}, "grades.grade":'A',borough:{$ne:'Brooklyn'}},options:{sort:{cuisine:-1}}};
{filter:{name:{$regex:'^Wil'}}, projection:{'_id':0,'restaurant_id':1, 'name':1, 'borough':1, 'cuisine':1}} ;
{filter:{name:{$regex:'ces$'}},projection:{'_id':0,'restaurant_id':1, 'name':1, 'borough':1, 'cuisine':1}};
{filter:{name:{$regex:'Reg'}},projection:{'_id':0,'restaurant_id':1, 'name':1, 'borough':1, 'cuisine':1}};
{borough:'Bronx', cuisine:{$in:['American', 'Chinese']}};
{borough:{$nin:['Staten Island', 'Queens', 'Bronx','Brooklyn']}};
{filter:{cuisine:{$regex:/seafood/i}},projection:{_id:0,restaurant_id:1, name:1, borough:1, cuisine:1}};
{filter:{'grades.1':{date:ISODate("2014-08-11T00:00:00Z"),grade:'A', score:9}},projection:{'_id':0,'restaurant_id':1, 'name':1, 'grades':1}};
{filter:{},options:{sort:{cuisine:1, borough:-1}}} ;
{"address.street":{$exists:true, $nin:[null]}};
{filter:{'grades.score':{$mod:[7,0]}}, projection:{'_id':0,'restaurant_id':1, 'name':1, 'grades':1}};

