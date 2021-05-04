import { mailService } from "./services/mailService.js";


export class EmailApp extends React.Component {
    

    bigTest(){

        mailService.test();
        mailService.testReturn();
    }


}