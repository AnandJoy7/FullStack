Customer = []
Train = []
train = Train


class Customer:
    def __init__(self,id,name,mail,phone_no,password,address) -> None:
        self.id=id
        self.name=name
        self.mail=mail
        self.phone_no=phone_no
        self.password=password
        self.address=address

        pass
        
class Train:
    def __init__(self,id,name,destiantion,date,status,categroy,seats,coach,sleeper,pay) -> None:
        self.id=id
        self.name=name
        self.destiantion=destiantion
        self.date=date
        self.status=status
        self.category=categroy
        self.seats=seats
        self.coach=coach
        self.sleeper=sleeper
        self.pay=pay


        train= Train.append(Train(1,"Chennai","Tamabrma","5/10/2023","Confrim","General",10,7,"2AC",250))
        

    def trainBooking(self,categroy,seats,coach,sleeper,pay):
        self.category=categroy
        self.seats=seats
        self.coach=coach
        self.sleeper=sleeper
        self.pay=pay
        if(self.seats>5):
            print(f"select the {self.category}")
            print(f"currently avaivalbe{self.coach}")
            print(f"select the {self.sleeper}")
            print(f"Ticket FEE{self.pay}")
            print(f"Have A Safe Journey")     
        else:
            print(f"{self.name} Train is fulled ")
 
    def cancelTicket(self,seats):
        pass

    def getStatus(self):
        print(f"---------Welcome{self.name}Express-------------")
        print(f"Currently avaialable{self.destiantion}")
        print(f"schedueles as {self.date}")
        if(self.status=="confirm"):
            print(f"ready to book the {self.trainBooking}")
        else:
            print(f"wait for next train")
    
    # def PayProcess(self,):


 