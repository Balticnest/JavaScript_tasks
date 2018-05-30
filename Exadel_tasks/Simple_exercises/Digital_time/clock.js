function digital_clock() 
  {
      this.cur_date = new Date();
      this.hours = this.cur_date.getHours();
      this.minutes = this.cur_date.getMinutes();
      this.seconds = this.cur_date.getSeconds();
  }
     digital_clock.prototype.run = function ()
     {
            setInterval(this.update.bind(this), 500);
     };
     digital_clock.prototype.update = function () 
     {
            this.updateTime(1);
            console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
     };
    digital_clock.prototype.updateTime = function (secs) 
     {
         this.seconds+= secs;
            if (this.seconds >= 60)
            {
                  this.minutes++;
                  this.seconds= 0;
            }
           if (this.minutes >= 60)
            {
                  this.hours++;
                  this.minutes=0;
            }
            if (this.hours >= 24)
            {
                  this.hours = 0;
            }
    };
        var clock = new digital_clock();
        clock.run();
  