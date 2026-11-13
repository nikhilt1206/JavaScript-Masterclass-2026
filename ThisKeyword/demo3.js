//Nested objects 
const company = {
    name : 'Tech with Jatin',
    trainer : {
        //name : 'Jatin', //if name won't be there - undefined (won't take name from outer parent)
        x : {
            name : "Jatin"
        },
        printTrainerInfo : function(){
            console.log('Trainer Name', this.x.name);
        }
    }
}
company.trainer.printTrainerInfo(); //company.trainer - caller (object) - so focus on trainer object only 
//In JS, this keyword will alaways access downward properties 