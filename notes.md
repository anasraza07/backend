node ya node -v command se check kr skte hain ke install hai hamare system mein ya nhi aur konsa version hai
nodejs ki website se lts version download kr skte hain easily aur specific system ke liye bhi kr skte hain
node sirf server side ke liye nhi hai even vscode jesi application bhi nodejs pr bani hai so bht saare kaamo mein se nodejs ka eik popular use server side prograammming hai
nodejs javascript ka runtime environment hai jo javascript ko browser se bahar bhi run krne deta hai yaani eik environment provide krta hai, is se pehle python jesi libraries ka use krke backend bnta tha aur phr 2009 mein nodejs release hua jo ab bht popular bhi hai aur sbse imp JS based hai so javascript ki knowledge ko hi ham backend pr implement kr skte hain
Wese to nodejs IOT, game development mein bhi use hota haii but sbse zaada popular ye server side programming ke liye use kia jaata hai
Iske andr bht saare tools hai so ye naa koi language hai naa library aur naa hi framework, balke ye eik environment thats it.
Terminal pr node likhne se nodejs wohi browser ki console window ban jaata hai (ham javascript mein aajate hain) aur ab wahan ls jesi command work nhi karegi bcuz ye terminal ki command hai aur aap js console window pr hain
REPL = read evaluate print loop
ndoe repl mein ham dom ko access nhi kr skte bcuz wo html elements hote hain aur ham sirf js code run kr skte hain isi liye window hamein undefined milta hai but global likhne se eik obj milta hai jis mein browser functions jese setInterval wagera hote hain
Apni node repl mein .help likhne se aur commands milti hain jese .code, .exit wagera aur .exit se ham js console se bahar aajate hain and phr araam se terminal command use kr skte hain
again repl mein enter krna hai so again we will write node command 
node ka use krke ab ham js code ka output dekhenge sbse pehle terminal se bhi file create kr skte hain using `type nul > filename.txt` command bs shart ye hai ke aap sahi directory pr hon iske baad aap file mein js code likhen
node ka use krke code execute krne ke liye we use `node filename.js` command aur hamein output dikh jaata hai
ls command se directory ke andr ke files aur folders dikhte hain but for linux/unix so instead we use dir command for windows
Isi tarh file create krne ke liye we use `type nul > filename.txt` in windows and `touch filename` in linux/unix
Process = nodejs mein ye eik bara saa obj milta hai hamein jis mein current saari info hoti hai jese version, current working directory (cwd), current process kia chalraha hai, input, output etc aur isko ham use krke manipulate bhi kr skte hain
process.argv hamein eik array return krta hai jis mein cmd based arguments hote hain jo ham filename ke sth pass krte hain aur yehi arguments us array mein 2 items ke baad line se added hote hain jis mein 1st item hota hai executable path for node aur 2nd item hota hai hamari current directory path
Inshort jese ham browser mein prompts use krte hain wese hi node mein overall file ko kch arguments de ke unhen use krne ke liye ham process.argv property use krte hain simple 
module.exports = use hota hai current file se bht saari ya koi bhi chz doosri files tk export krne ke liye same directory mein, ye by default eik obj hota hai jisko ham explicitly string ya number mein bhi change kr skte hain aur ham jo bhi value denge wohi export ho ke hamein doosri files mein milegi
require = ye wo built-in function hai jo file mein import yaani include krta hai jo kch module se export kia gaya ho, agr kch export naa ho to empty obj milta hai
Bht saari values ko ham eik sth obj mein save krke export krwa skte hain wrna direct `module.exports = {}` se bhi apni values obj ke andr rkhwa skte hain isi tarh direct values se pehle `module.exports.<valueName>` laga kr bhi export kr skte hain balke sirf exports.valuename se bhi hojayega shortcut mein lekin exports se string ya number nhi hoskta bcuz exports se ham module obj mein value add krwate hain
Export in directories = yaani jb same directory naa ho to phr ham ye krte hain ke jis folder se export krwaana ho uski eik index file banaate hain us file mein pehle saari cheezen require ke through include krte hain then un sbko (by array or obj) group krke export krte hain index file se
Ab jahan use krna ho usi index file se import krwaa ke use krte hain
Index file eik entry point hota hai isi liye import krte hue bhi folder ka naam hi kaafi hai sirf  
NPM = (node package manager) isko ham yu imagine kr skte hain ke ye eik library of packages hai yaani bht saare packages apne paas rkhta hai 
Package = a part of code jo developers likhte hain kch kaam easy krne ke liye jese express aur reactjs bhi eik tarah ke packages hii hain jo kch devs ne milke likha hai
Ab npm command line tool bhi hai yaani package se related har kaam krne ke liye terminal pr ham npm use krte hain like for install, update, change version, delete etc etc aur ye npm nodejs ke sth by default installed aata hai
Just npm likh ke ham check kr skte hain bht saari commands mil jayengi if install ho pehle se
npm install <libraryName> command se ham library ya package install krte hain install ka alias hai i yaani npm i is sa shortcut same kaam krta hai
Install ham jb krte hain jb hamein kisi aur ka code use krna ho aur koi bhii package install krte hi 3 files download hoti hain node_modules, package-lock.json aur package.json
node_modules = folder hai jo saari installed dependency rkhta hai yaani wo sb packages jo aapne install kiye apne project (mein use krne) ke liye aur is folder ko hamein cherna bilkul nhi hai ye khud install hota hai aur koi changes nhii maangta, hn bs kahi code save krne ya dene ke liye ham ye folder delete kr skte hain
package-lock.json = is file mein saare packages ke versions hote hain aur har package ke andr jo packages hain (yaani sub dependencies) wo bhi aur uske versions ka bhi record hota hai
Kisi package ko require krte hue ham just uske naam se include krte hain aur use krte hain
package.json = file jo node project mein sbse important file hoti hai is mein hamare project ki info, metadata, desc wagera hota hai aur dependencies ke baare mein bhi is file mein save hota hai with versions
npm init command se package.json file initialize yaani banti hai for a complete new project
node_modules ka folder kbhi delete hojaaye to package.json ki help se npm install krne pr again folder create hojaata hai with all dependeices
Github pr package.json ki hii file jaati hai node_modules nhi jaata wo phr jb project clone krna ho to banda khud create krta haii using command so package.json is imp file
So inshort node_modules mein hamari dependencies aur unka code save hota hai jbke dependencies ki info ya unke versions wo package.json mein rehta hai which help us to reinstall them
`npm install -g <package name>` = ye command hai packages ko globally install krne ke liye wnra locally hi install krna is a best practice aur wohi krna chahiye
Kisi directory mein package install hone ke baad sirf usi folder mein accessible rehta haii baaqi kahi nhi aur globally use krne ke liye:
- pehle to glloballly install krna prta hai using above command
- aur uske baad link krwana prta hai directory se using `npm link <package name>` command phr without any error code run hojayega
Javascript ke es6 version mein import export bhi introduce karaya gaya tha jis mein ham require ki jaga import use krte hain aur import krne ke liye export bhii krna prta haii aur ye waala export just eik keyword hai instead of any object or anything else
Aur in dono ko use krne ke liye ya to extension .mjs ho ya package.json file mein type module hona zaroori hai wrna error
import use krke ham selective cheezen use aur import kr skte hain jbke require mein sb include hota hai obj mein aur doosra ye ke import asynchronously work krta hai jo pehle load hojaye jbke require line by line hi load krta hai synchronously

Library vs framework = ye dono hi pre-defined code hote hain jo kisi ne pehle se likhe hote hain hamare liye but library kisi specific task ko perform krne ke liye hota hai yaani code ka koi chota part complete krne ke liiye jese axios eik library hai, jbke framework overall structure deta hai web applications develop krne ke liye jese expressjs
Control ki baat karen agr to library mein control hamare paas hota hai aur framework mein control uska hota hai wohi rules follow krne prte hain hamein
Expressjs = nodejs web application framework hai jisko ham server side programming mein use krte hain
Iske 4 major kaam ye hain:
1. ye incoming request ko listen krta hai
2. reuqest ko parse krta hai nodejs ke hisaab se
3. match krta hai response ko requests se
4. suitable response kese send krna hai wo bhi dekhta hai
Routes = slash ke baad jo bhi likha hota hai usko route kehte hain yaani alag alag raaste jahan request bheji jaa skti hai
express install krke require krke phr call krte hain aur app naam ke variable mein save rkhte hain yehi convention hai aur phr is app ke through hamare saare kaam hote hain server side programming mein yaani app eik obj hota hai jiske andr bht si use hone waali properties hoti hain
app.listen = wo method hai jo har aane waalii incoming request ko listen krta hai aur server band nhi hota jb tk ham exit naa karen wo listen krta rahega
port = iska mtlb hota hai connection point but yahan logical endpoints ki baat hai jahan eik request aur response ka network connection build hota hai jahan client hamare sever se baat karega
cannot get / = is errror ka mtlb haii server is running but kch get nhii kr raha sirf listen krta hai
app.use = method hai jo har tarh ki request har route pr leta hai aur iske sth jo callback hai wo execute hota hai jis mein ham apna response bhi bhej skte hain, aksar kisi common function ke liye use krte hain jo hamein baar baar har request pr run krwaana ho
express by default us callback function mein req aur res ke parameters deta hai
jo req bheji jaait hai wo http request text based hoti hai taake backend jis bhi language mein ho wo smjh sake aur epxress usko parse krta hai jesa hamne pehle prha tha aur request ko obj mein convert krta hai
Response send krne ke liye ham send krte hain res.send method jis se ham kch bhi send kr skte hain html, string, json obj wagera
Abhi tk to hr route pr same response bcuz ham app.use ka use kr rahe hain aur wo just request dekh ke response send krdeta hai
Routing = traffic ke liye path select krne ka process hai network mein ya networks ke darmiyan taake phr har route ke liye alag response ho aur har route ke liye response eik hoga eik se zaada nhi
Different routes pr different response bhejne ke liye ham use krte hain app.get, app.post, app.put wagera methods jo route dekh ke callback execute krte hain
Aur wildcard yaani wo not found route ke liye ham "*" path route mein use krte hain but wo kaam nhi kr raha
nodemon = package hai jo koi bhi code changes pr server ko automatically restart krta hai aur isko globally install krna acha hai
path parameters = request mein variable paths ke liye koi bhi developer server file ke andr bht saari requests eik sth create nhi krta balke iske liye path parameters use hote hain with colon ":" jese api kch is tarh banegi like  "/:username" aur request call krte waqt yu karenge 
"hostname.com/user1" ab ye user ka naam variable hai isi ke base pr response send hoga aur username ki saari info hamein req ke obj mein milti hai jisko req.params se access kia jaata hai
query strings = path parameters jese ye query strings bhi hote hain, inke through ham apne response ko aur customizable banaa skte hain. Request call krte waqt kch is tarh krte hain "/search?q=apple" aur backend pr 
req.query se access hojaati hain saari queries, isko ham aksar use krte hain for search results ya filters ya pagination ya sorting etc etc
- EJS (embedded javascript templates) eik tarh se html pages banaane ka  blueprint hai jese variable path parameters se bht saare routes bante hain aese hi ejs tool ka use krke ham bht saaare eik jese dikhne waale html pages banaate hain different info de kr aur is mein js logic bhi ham use kr skte hain
- ejs ko import krne ki zarurat nhi bcuz expressjs by default import krleta hai ejs ko internally
npm init -y = saare options default set hojaate hain 
using ejs = app.set("view engine", "ejs"); ejs use krne ke liye ham ye line likhte hain aur ejs ko as a template engine set krte hain
app.set = ye function kch bhi set krne ke liye use hota hai in expressjs
- views naam se folder banaao aur phr uske andr files create kro .ejs extension ke sth aur usko req ke andr render krwao using `res.render` just like this `res.render("home.ejs");` expressjs automatically ejs files ke liye views ka folder hi dekhta hai current directory mein
- `app.set("views", path.join(__dirname, "/views"));` = ye line likh ke ham views ko set krte hain apne directory ke views folder se yaani phr server kahi se bhi run ho, express views folder ko apni directory mein hi dhundega aur kahi nhi aur iske liye path ko bhi import krna parta hai jo ke khud eik package hai nodejs ke sth aata hai eik tarh se built-in utility hai file aur directory ke sth kaam krne ke liye
- interpolation = js expression html ke andr likhne ke liye ham ejs ka ye tag use krte hain `<%=  %>` iske andr kch bhi likho wo eik string banta hai render hojaata hai
passing data to ejs = jb database se koi data aata hai to isko backend se pass krne ka tareeqa ye hai ke data get krke ham ejs file render krte waqt us variable ko 2nd argument mein pass karden in an object key-value pair ki tarh aur jb key-value dono naam same hon to ofcourse eik baar hi likhna kaafi hai jese `res.render("/rolldice.ejs", { diceValue })`
- Aur phr hamein wo value automatically access hojaati hai ejs file mein
- conditional statement, control-flow and loops in ejs = in sbke liye 
`<% %>` ye waale tags use hote hain inko scriptlet bhi kehte hain yaani for writing javascript har line pr ye opening and closing tags aayenge jo line js ka part hogi
- database se aane waale data ko ejs mein pass krne ke liye ham pehle require krte hain aur phr pass krke us data ko use karte hain