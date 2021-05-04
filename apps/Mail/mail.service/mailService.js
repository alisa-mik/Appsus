import {storageService} from '../../../services/storage-service.js';
import {utilService} from '../../../services/util-service.js';

export const mailService = {
    _createEmails,
    query,
    myMail,
}

const KEY = 'Emails';
const MY_MAIL = 'a&a@dr-seuss.com'

var gEmails;
_createEmails();

function query() {
    return Promise.resolve(gEmails);
}



function myMail() {
    return Promise.resolve(MY_MAIL);
}










function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails);
}


function _createEmails() {
    gEmails = storageService.loadFromStorage(KEY);
    if (!gEmails || !gEmails.length) {
        gEmails = getMails()
        _saveEmailsToStorage();
    }
}

function getMails() {

    const emails = [{
            id: utilService.makeId(6),
            from: MY_MAIL,
            to: 'codingacademy@misterbit.co.il',
            subject: `תודה רבה על ההנחה`,
            body: ` היי מוריה.
            תודה רבה על ההנחה שארגנת לי. קצת לא נעים לי לשלם פחות מכולם אבל אני אחיה עם זה. `,
            isRead: true,
            sentAt: new Date().toLocaleString()
        },
        {
            id: utilService.makeId(6),
            from: MY_MAIL,
            to: 'rabanut@org.co.il',
            subject: `הדרכת כלה`,
            body: `שלום רב,
            האם ניתן לזרז את תהליך הדרכת הכלה על מנת שנוכל להתחתן מהר יותר?
            `,
            isRead: true,
            sentAt: new Date().toLocaleString()
        },
        {
            id: utilService.makeId(6),
            from: 'info@beerandbeyond.com‏',
            fromName: 'Beer And Beyond',
            to: MY_MAIL,
            subject: `תודה שקנית אצלינו!`,
            body: `היי אריק, תודה רבה על ההזמנה! מעריכים את זה שבחרתם להזמין דרכנו ובטוחים שתהנו מהמוצרים. אם בחרתם באופציה של איסוף עצמי יש לחכות לאישור מאיתנו שההזמנה מוכנה. אם בחרתם באופציה של משלוח,
             תקבלו מאיתנו בקרוב עדכון לגבי צפי ההגעה ו/או מספר מעקב `,
            isRead: false,
            sentAt: new Date().toLocaleString()
        },
        {
            id: utilService.makeId(6),
            from: 'myEx@crazy.com',
            fromName: 'U know who',
            to: MY_MAIL,
            cc: '',
            subject: `קודם כל תדע שאני לא כועסת`,
            body: `${utilService.makeLorem(50)}

            ${utilService.makeLorem(100)}

            ${utilService.makeLorem(50)}

            ${utilService.makeLorem(100)}`,
            isRead: false,
            sentAt: new Date().toLocaleString()
        },
        {
            id: utilService.makeId(6),
            from: 'alona-barkat@HBS4EVER.co.il',
            fromName: 'הפועל באר שבע ',
            to: MY_MAIL,
            subject: `בוא לאמן אותנו`,
            body: `אריק היקר,
            
            למרות שאמרת לנו מיליון פעמים שהתחלת ללמוד ויחסית זה בסדר לך,
            אנחנו ממש צריכים אותך בקבוצה.
            
            בבקשה תשקול את זה שוב.
            מחכה לתשובתך, אלונה.`,
            isRead: false,
            sentAt: new Date().toLocaleString()
        },
        {
            id: utilService.makeId(6),
            from: 'NZ@gov.co.nz',
            fromName: 'The New Zealand Government',
            to: MY_MAIL,
            cc: '',
            subject: `Please come back`,
            body: `Dear Alisa,

            We miss you and the kids.
             We are ready to send you plane tickets for you to arrive soon.
            If necessary, we will also fund free food and someone to wash dishes every evening.
            Please reply us soon.`,
            isRead: false,
            sentAt: new Date().toLocaleString()
        },
        {
            id: utilService.makeId(6),
            from: MY_MAIL,
            to: 'asi-oren@css-master.co.il',
            subject: `תודה על הסדנא`,
            body: `אסי האלוף,
            היתה סדנא פצצהץ  למדתי ממך הרבה. 
            מחכה למפגש הבא, אליסה.`,
            isRead: true,
            sentAt: new Date().toLocaleString()
        },
        {
            id: utilService.makeId(6),
            from: 'kever-rachel@tzdaka.com',
            fromName: 'Kever Rachel',
            to: MY_MAIL,
            cc: '',
            subject: `בקשת תרומה`,
            body: `צדיקים יקרים,
            כמו בכל שנה, נשמח לקבל את תרומתכם הקבועה.
            יחד איתכם נגיע ליעד שלנו לגיוס הכספים, 
            ובכל זאת נמשיך להתקשר אליכם לבקש שוב. `,
            isRead: false,
            sentAt: new Date().toLocaleString()
        },
        {
            id: utilService.makeId(6),
            from: 'prince@nigerian-sting.co.ng',
            fromName: 'Prince ShokoZulu',
            to: MY_MAIL,
            subject: `I need your help`,
            body: ` Hello.
            I'm the prince ShokoZulu.
            I got a big inheritance of 1,000,000$ and due to tax issues I can not use the money.
            Send me your details and with your help we can get the money.
            I will give you back a very nice return.
            This is not a scam. Give me your credit card information.
            Love you very much.`,
            isRead: false,
            sentAt: new Date().toLocaleString()
        },
        {
            id: utilService.makeId(6),
            from: 'sx-dolls@funfunfun.com',
            fromName: 'Fun Toys',
            to: MY_MAIL,
            subject: `Your purchase`,
            body: `Dear Customer!

            We hope you enjoy the product and treat it well.
            Because you are our returning customer,
             we would like to give you a 10% off discount
              for your next purchase.`,
            isRead: false,
            sentAt: new Date().toLocaleString()
        },
        {
            id: utilService.makeId(6),
            from: 'CloudPlatform-noreply@google.com',
            fromName: 'Google Cloud',
            to: MY_MAIL,
            subject: `Account confirmation: Your Google Cloud free trial`,
            body: `Welcome to your Google Cloud free trial.
             Beginning today, you have $300 USD in credit to spend on Google Cloud.
              With your free trial, you can:
            Use your credits to evaluate the platform risk-free*
            Explore a wide range of Google Cloud products and services –
             from Compute Engine and BigQuery to App Engine and industry-leading AI    
            Easily check your credit usage by visiting the Cloud Billing section
             of your Google Cloud Console`,
            isRead: false,
            sentAt: new Date().toLocaleString()
        },
        {
            id: utilService.makeId(6),
            from: 'noreply@github.com‏',
            fromName: 'GitHub',
            to: MY_MAIL,
            subject: `alisa-mik invited you to alisa-mik/Appsus`,
            body: `You can accept or decline this invitation.
             You can also head over to https://github.com/alisa-mik/Appsus
              to check out the repository or visit @alisa-mik
               to learn a bit more about them.`,
            isRead: true,
            sentAt: new Date().toLocaleString()
        },
        {
            id: utilService.makeId(6),
            from: 'Van-Gogh@tickets.com‏',
            fromName: 'VAN GOGH',
            to: MY_MAIL,
            subject: `VAN GOGH – התערוכה  `,
            body: `מיצג האמנות המדובר בישראל, בו נכחו למעלה ממאה אלף ישראלים, חוזר!
            משבר הקורונה טרף את הקלפים של עולם התרבות, ואנו שמחים לבשר על פתיחה מחודשת של מיצג האמנות, שזכה לשבחים והתפעלות בקרב הקהל הישראלי. 
            לאור הביקוש הרב ואחרי שסחף למעלה ממאה ועשרים אלף ישראלים 
            
            מוזיאון VAN GOGH הבינלאומי עובר לחולון!
            
            מתחם לה פארק (פארק פרס) חולון
            תחת הקפדה על כללי התו הסגול 
            
            שימו לב! לא תהיה אפשרות להיכנס לתערוכה ללא תיאום הגעה מראש גם אם נרכשו כרטיסים מראש 
            (אם נרכשו מראש לפי תאריך ושעה ספציפיים אין בעיה)
            
            למיצג המפואר, המכיל 2000 מיצירותיו של האמן, הנפרס על פני 1000 מטר במתחם לה פארק שבחולון, תתווסף מתכונת המותאמת לשגרת הקורונה ועל פי הנחיות משרד הבריאות.
            
            התקופות השונות בחייו והסיפורים שמאחורי הציורים מקבלים בתערוכה מימד חדש ופורץ גבולות- ציורים שיוצאים מהמסגרת ומוצגים ב- 360° בין פינות וקירות, באמצעות הקרנה עוצרת נשימה שמעניקה פרספקטיבה חדשה.  הציורים של Van Gogh מצטרפים לסימפוניה של צלילים, אורות וצבעים המשולבים בתערוכה ומאפשרים חוויה רב-חושית ובלתי נשכחת של פעם בחיים. יצירותיו ממשיכות להדהד ברחבי העולם כבר למעלה מ 150 שנה ולספר את סיפורו הבלתי יאמן של אדם מוכשר ודל אמצעים שגילה את יכולתו רק בגיל 30.
            
            דברי ההפקה: "הצמא הגדול לחיי תרבות חזק מכולנו וצריך להמשיך במסגרת המגבלות, וזאת על מנת לקיים חיי שיגרה עד כמה שניתן. ההפקה מתחייבת לשמור על ההנחיות ולספק לקהל את התנאים הבטיחותיים והחווייתיים ברמה הגבוהה ביותר.
            
             מתחם לה פארק, פארק פרס, חולון
            פתוח כל ימות השבוע
            
            שעות הפעילות :
            ימי א' – ה' – 10:00 עד 19:00 (כניסה אחרונה בשעה 18:00)
            ימי ו'  – 09:00 עד 15:00 (כניסה אחרונה בשעה 14:00)
            יום שבת – פתוח! 09:00-19:00 (כניסה אחרונה בשעה 18:00) ​
            
            * ילד מגיל 3 חייב כרטיס
            ** כרטיסים שטרם נוצלו יהיו תקפים לכניסה בימי ושעות הפעילות
            
            כללים ונהלי בטיחות בריאותית:
            ​ 1. המבקרים מתבקשים לעבור מדידת חום גוף בכניסה. במידה וחום גוף יהא מעל 37.5 מעלות, לא תתאפשר כניסה למתחם המיצג.
            2. המבקרים מתבקשים להירשם בטופס נוכחות, עם כניסתם למתחם המיצג.
            3. בשלבי הכניסה למתחם המיצג ואף בתוכו, המבקרים מתבקשים לשמור מרחק של 2 מטר בין אחד לשני.
            4. הכניסה למתחם המיצג מותנית בחבישת מסיכה.
            5. לרווחת המבקרים, הוצבו ברחבי המתחם עמדות לחיטוי הידיים. ​`,
            isRead: true,
            sentAt: new Date().toLocaleString()
        },


    ];
    return emails;

}