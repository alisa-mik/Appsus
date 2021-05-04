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



}