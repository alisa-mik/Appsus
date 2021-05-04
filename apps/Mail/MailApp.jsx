<<<<<<< HEAD
import { mailService } from '../Mail/mail.service/mailService.js';


export class MailApp extends React.Component {
    
    
    componentDidMount(){
        
        console.log('אני אופטימי');
        mailService.test();
        mailService.testReturn();
    }
    
    render() {
        return <div>STAM NETO MAIL APP</div>
    }
=======
export class MailApp extends React.Component {
// import { mailService } from "./services/mailService.js";


    
    // bigTest(){

    //     mailService.test();
    //     mailService.testReturn();
    // }
>>>>>>> e0f6f3641a4b9eb40e39ff1086a4fbca64948c14


    render() {
        return (
            <h1> I am your Email</h1>

       )}
        }

    

 