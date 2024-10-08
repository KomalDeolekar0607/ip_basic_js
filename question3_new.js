class person {
    constructor(name,lastname,age ){
        console.log(typeof(name))
        try{
            if(typeof(name) == 'number'){
                throw new Error("Enter the correct name ....")
            }else if(typeof(lastname == 'number')){
                throw new Error("Enter correct lastname ....")
            }
        } catch(err){
            console.error("An error occured ", err.message)
        }
        this.name = name
        this.age = age
        this.lastname = lastname
    }

    displayDetails(){
        console.log("superclass method called")
        console.log(`Hello ${this.name} ${this.lastname}`)
    }
}

class Student extends person{
    constructor(name , lastname , age , rollno, year , sem){
        super(name , lastname , age)
        this.rollno = rollno
        this.year = year
        this.sem = sem
    }

    displayDetails(){
        console.log("subclass method called")
        super.displayDetails()

        // console.log(typeof(this.rollno))
        // console.log(this.sem == 5)
        // console.log(this.year === "3rd")
        // console.log(this.year == "3rd" && (this.sem != 1 || this.sem != 2))

        if(this.rollno <= 0){
            throw new Error("rollno should be greater than zero")
        }
        else if(typeof(this.rollno) != 'number'){
            throw new TypeError("The Roll No should be a number")
        } 
        else if(this.year === "1st" && (!(this.sem == 1 || this.sem == 2))){
            throw Error("provide proper year and semester")
        }
        else if(this.year === "2nd" && (!(this.sem == 3 || this.sem == 4))){
            throw Error("provide proper year and semester")
        }
        else if(this.year === "3rd" && (!(this.sem == 5 || this.sem == 6))){
            throw Error("3rd provide proper year and semester")
        }
        else if(this.year === "4th" && (!(this.sem == 7 || this.sem == 8))){
            throw Error("provide proper year and semester")
        }

        console.log(`your Roll No. is ${this.rollno}`)
        console.log(`you are in ${this.year} year ${this.sem} semester`)
        console.log(`your age is : ${this.age}`)
    }
}

let st = new Student("Sara" ,"Deo", 20 , 22 , "3rd", 5)
st.displayDetails()


try{
        let st1 = new Student(2345 ,"Dey", 20 , 24 , "4th", 7)
        st1.displayDetails()

        let st2 = new Student(2345 ,"Dey", 20 , 24 , "2nd", 7)
        st2.displayDetails()
    }
    catch(error){
        console.log(error.message)
}



