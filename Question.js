class Question {
    constructor() {
        this.title = createElement('h2');
      this.input1 = createInput("Name");
      this.input2 = createInput("enter correct option no.");
      
      this.button = createButton("Submit");
    this.question = createElement("h3");
    this.option1 = createElement("h4");
    this.option2 = createElement("h4");
    this.option3 = createElement("h4");
    this.option4 = createElement("h4");
      
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
      }

      display(){
        this.title.html("MyQuiz Game");
       this.title.position(350, 0);

       this.question.html("Question: What year did the first McDonald's store open?");
       this.question.position(150,80);
       this.option1.html("1: 1940")
       this.option1.position(150,100);
       this.option2.html("2: 1990")
       this.option2.position(150,120);
       this.option3.html("3: 1999 ");
    this.option3.position(150, 140);
    this.option4.html("4: 1930");
    this.option4.position(150, 160);

    this.input1.position(250, 230);
    this.input2.position(450, 230);
    this.button.position(400, 300);

    this.button.mousePressed(() => {
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount += 1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
       

       
        
        
      }
}