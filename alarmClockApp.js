import { LightningElement } from 'lwc';
import AlarmClockAssets from '@salesforce/resourceUrl/AlarmClockAssets';
export default class AlarmClockApp extends LightningElement {
    clcockImage = AlarmClockAssets + '/alarmClock.png';
    currentTime = "";
    connectedCallback() {
        this.CurrentTimeHandler();

        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        day = day < 10 ? "0" + day : day;
        month = month < 10 ? "0" + month : month;
        this.fullDate = `${day}/${month}/${year}`;
    }

    CurrentTimeHandler() {
        setInterval(()=> {
            let dateTime = new Date();
        let hours = dateTime.getHours();
        let minutes = dateTime.getMinutes();
        let seconds = dateTime.getSeconds();
        let AmPm = "AM"

        if(hours === 0) {
            hours = 12;
        }else if (hours === 12) {
            AmPm = "PM";
          }  
        else if(hours >= 12) {
            hours = hours - 12;
            AmPm = "PM";
        }
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        this.currentTime = `${hours} : ${minutes} : ${seconds} ${AmPm}`
        }, 1000)
        
    }
}