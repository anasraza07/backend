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
using ejs = `app.set("view engine", "ejs");` ejs use krne ke liye ham ye line likhte hain aur ejs ko as a template engine set krte hain
app.set = ye function kch bhi set krne ke liye use hota hai in expressjs
- views naam se folder banaao aur phr uske andr files create kro .ejs extension ke sth aur usko req ke andr render krwao using `res.render` just like this `res.render("home.ejs");` expressjs automatically ejs files ke liye views ka folder hi dekhta hai current directory mein
- `app.set("views", path.join(__dirname, "/views"));` = ye line likh ke ham views ko set krte hain apne directory ke views folder se yaani phr server kahi se bhi run ho, express views folder ko apni directory mein hi dhundega aur kahi nhi aur iske liye path ko bhi import krna parta hai jo ke khud eik package hai nodejs ke sth aata hai eik tarh se built-in utility hai file aur directory ke sth kaam krne ke liye
- interpolation = js expression html ke andr likhne ke liye ham ejs ka ye tag use krte hain `<%=  %>` iske andr kch bhi likho wo eik string banta hai render hojaata hai
passing data to ejs = jb database se koi data aata hai to isko backend se pass krne ka tareeqa ye hai ke data get krke ham ejs file render krte waqt us variable ko 2nd argument mein pass karden in an object key-value pair ki tarh aur jb key-value dono naam same hon to ofcourse eik baar hi likhna kaafi hai jese `res.render("/rolldice.ejs", { diceValue })`
- Aur phr hamein wo value automatically access hojaati hai ejs file mein
- conditional statement, control-flow and loops in ejs = in sbke liye 
`<% %>` ye waale tags use hote hain inko scriptlet bhi kehte hain yaani for writing javascript har line pr ye opening and closing tags aayenge jo line js ka part hogi
- database se aane waale data ko ejs mein pass krne ke liye ham pehle require krte hain aur phr pass krke us data ko use karte hain
- error ke liye ham alag se bhi eik file error.ejs banaake coditions add krke render krwa skte hain
- includes = isko ham sub templates ke liye use krte hain jese ejs file to poora html page banaata hai but agr same header hai bht saare pages ka to ham views ke andr hi eik folder mein header.ejs file banaa ke usko har file mein include kr skte hain using includes kch is tarh `<%- include("includes/head.ejs") %>`
GET and POST request = get request se data url mein dikhta hai so secure nhi hota aur url ki length limited hoti haii, ham query string mein data bhejte hain aur sirf string mein hi data bhej skte hain. Jbke post request create/update wagera ke liye use hoti hai aur iski koi limited nhi bcuz yahan req.body mein data bheja jaata hai aur any type of data hoskta hai
post request = post request mein data access krne ke liye pehle parse krna prta hai bcuz express direct nhi smjh paata req.body ka data aur undefined return krta hai so ham parse ke liye ye line add krte hain 
`app.use(express.urlencoded({ extended: true }));` is se hota ye hai ke phr kisi bhi req.body mein url encoded data aaye to express usko parse krke smmjh ke re.body mein convert krdeta hai but agr json data aajaye to uske liye eik aur line likhte hain `app.use(express.json());` jis se express json data bhi parse krke smjh leta hai
url encoded data = wohi kehlaata hai jo user ke data mein spaces aur special characters ko symbols mein change krke eik hi line mein krke form bharte waqt bheja jaata hai taake koi error naa aaye
- req.body = by default kisi bhi type ka data return nhii krta jb tk ham middlewares naa likhen aur define naa karen ke kis type ka data hai tb hii woo parse krke smjh ke data return karega

- REST (representational state transfer) = acrhitectural style hai jo apis aur server create krne ke liye kch rules define krta haii aur ham un rules ko follow krke jo apis banaate hain usko restful apis kehte hain 
- restful apis crud operations perform krti hain jese create read delete aur update
- rest apis best practices = nouns use kro verb nhi, json data accept aur return kro, versioning use kro, collections plural rkho, sirf related cheezen hi nested hon (bht deep nhi), errors properly handle kro codes aur msgs helpful ho, filtering sorting pagination allow kro, security ka dhyan rkho, caching use kro
- one line rule = rest api aesi design ho jo without documentation bhii smjh aajaye
- get means to retreive resources, post means to create new content, put means to update existing data, patch means to update existing data partially, delete means to remove data
- resource = eik term hai jis pe ham crud perform krte hain jese twitter ke liye tweets hota hai
- `app.use(express.static(path.join(__dirname, "/public")))` = public folder ke andr jo bhi files hain unko browser ke liye directly accessible banaane ke liye ham ye line likhte hain
- public folder = static files ka ghr jese html css js images etc
- res.redirect = different pages ko connect krne ke liye 
`res.redirect([status,], path)` method use krte hain jo apne kaam ke sth redirect bhi krta hai jese agr new post create krwane ke baad all posts waale page pr jaana ho to wahan ham iska use karenge, by default ye status code 302 return krta hai aur get ki hi request bhejta hai but status code ham change kr skte hain with first optional parameter
- 3 se start hone waale status codes redirection, content moves ke hote hain, 4 se start hone waale user ki taraf se errors ke hote hain aur 5 se start hone waale server ke internally errors hote hain
- uuid = eik acha package hai for unique id, uuid means universally unique identiifier, id is identifier. Wese to har database id provide krta hai but uuid bhi ham aksar use krte hain jahan database naa ho ya kisi aur waja se
- form se sirf 2 method bheje jaa skte hain so baaqi delete, patch wagera bhejne ke liye eik library use krte hain jo hai method-override
- method-override = library hai jo form ke get ya post method ko convert krke aapke diye gaye method mein change krta hai bs action link ke aage `?_method=DELETE` ye add krna prta hai aur backend mein library import krke middleware add krna prta hai
- is tarh ham client se server pr wo http verbs use krke req bhej skte hai jo jahan client support bhi nhi krta jese in forms
- express routes ko top to bottom check krta hai isi liye order sahi hona chahiye bht matter krta hai ye so pehle hamesha static routes, phr semi-dynamic aur phr full-dynamic routes jese 
/posts/new
/posts/edit
/posts/:id/comments
/posts/:id/
- so inshort dynamic route hamesha sbse end mein aana chahiye

- Database = jahan ham apna data store krte hain using node aur ye bhi backend ka hi eik part hai
- mySQL = ye eik database hai yaani smjho eik folder hai jahan bht saarii files store hain aur ham direct isko access nhi kr skte isko use krne aur crud perform krne ke liye we use SQL jo khud eik language hai iske through ham apne mysql db se baat krte hain
- database eik collection of data haii jo bht saara data store krta hai aur security and scalability jese features provide krta haii aur us se data ko insert, delete, search wagera krna bht easy hojaata hai
- DBMS = bs database ke ooper eik layer hai jo operations and functions related to db manage krtii haii jese sql queries
- sql db = relational database hota hai jahan data table form mein store hota hai jese mySql, oracle, postgreSql aur in sb mein sql langugae use hoti hai
- noSql db = yahan sql language use nhi hoti different databases mein different languages use hoti hain jese mongodb yahan JS use hota hai aur noSql mein table form nhi balke document ya key-value ya graph form mein data store hota hai
- database ki zaban mein table ko relation bhi kehte hain 
- mongodb = nosql database hai aur expressjs ke sth isko use krna bht popular option hai
- mongo shell = eik CLI ki tarh hai jese ham node likh ke js cli mein chale jaate hain aur phr JS code likh skte hain commands likh skte hain wese hi mongo shell hai jiska use krke ham database ki queries likh skte hain commands likhte hain aur mongo shell internally js code ko bhi recognize krta hai yaani bht saari cheezen js ki chalti hain shell mein
- mongodb community server = actual database engine jo computer pr database run krta hai aur background mein chalta hai iske bagair compass, shell, mongoose kch kaam nhi karega
- mongodb compass = gui tool to operate database
- mongo shell (mongosh) = command line yaani terminal se operate krna
- mongodb atlas = online mongodb (cloud) isko use krne se database computer pr run nhi hota balke internet pr mongodb servers pr run hota hai, projects aur deployment ke liye isko use krte hain
- mongodb 2 tarh se run hota hai eik to service mode se auto-start hota hai aur `mongod` command se manually har baar likhna prta hai
- `mongod` = is command se server start hota hai agr run naa horaha ho wrna install ke baad automatically bhi on hojaata hai if checked
- sbse pehle to `mongosh` command se ham mongo shell mein enter hote hain, `help` se saari commands hamein milti hain, `show dbs` se hamein databases milte hain isi tarh `show collection` se collections milte hain agr hon, `quit` ya `exit` se ham mongo shell se bahar aate hain, `use <dbName>` command se ham current database send krte hain
- database permananetly set krne ke liye uske andr data hona zaroorii hai wrna shell se bahar aane pr delete hojaata hai bcuz temporary hi set hota hai pehle
- test database bhi temporary hota hai baaqi admin, config, local ye sb by default add hote hain but ham in mein kaam nhi krte koi data add nhi krte alag se database banaate hain
- `db` command se apna current database check krte hain
- BSON Data = mongodb bson format mein data store krta hai, kch kch cheezen json data mein ineffecient hain jese space bht leta hai, data types limited hain aur text based format hota hai to parse krna difficult hojaata hai so in sb ko bson data format solve krta hai space bhi kam leta hai aur bht saari data types hoti hain jese data bhi save krwa skte hain unlike in json. But ham mongodb ko js obj form mein hi data denge baaqi wo khud bson mein convert krke data store krta hai so json utf-8 ki encoding krta hai jbke bson binary format mein krta hai jo sirf machine smjh skti hai
- documents = mongodb mein data document form mein store hota hai in key-value pair 
- bht saare documents mil kr eik collection bante hain aur bht saari collections database mein hoti hain so kch yu ye sb kaam krta hai
- json format ya js object mein jo data hota hai usko bhi eik document keh skte hain aur wo memory mein save hote waqt bson mein convert hota hai 
- insert in db = 2 methods use hote hain .insertOne({ key: value }) aur insertMany(array Of Documents)
- db.collection.insertOne = single document insert krta hai in a collection aur agr collection exist nhi krti to automatically collection create krke insertedId return krta hai jo unique hoti hai aur automatically insert hoti hai har document mein _id ke naam se
- db.collection.find() = se poore collection ka data return krta hai
- sql databases mein hamein pehle schema add krna prta hai ke hamari table row mein kon kon se columns hongay aur wohi data ham add kr skte hain agr naya column add krna ho to schema change krna prta hai but mongodb mein aesa nhi hai direct direct sb kaam chalta hai
- insertMany([{}, {}]) = multiple data insert krne ke liye use krte hain eik array aur uske andr har document ke liye alag object is tarh hamein insertedIds ka bhi obj return mein milta hai  
- find in db = db.collection.find() se to collection ka poora data hamein milta hai but ham iske sth sth specific queries bhi find kr skte hain key-value pair de ke like db.collection.find({key: value}) phr sirf wohi data aayega jis mein same key-value pair hoga
- findOne = sbse pehla jo find ho wo documnet return milta hai using 
db.collection.findOne({key: value})
- find aur findOne mein ye difference hai ke find() cursor deta hai yaani uska output array mein milta hai aur wo array reference hota hai original ka wo us original ko point krta hai jbke findOne return mein actual document deta hai
- ham eik se zaada key-value pairs se bhi find kr skte hain kisi specific data yaani document ko
- find operators = har operator se pehle $ sign lagta hai aur eik aur bracket mein inko pass krte hain jese `db.collection.find({key: {$gt: value}})` yaani jahan greater than this value ho wo document le aao
- $in = isi tarh in operator hota hai jahan ham array of values dete hain koii bhi value agr match kr jaaye jese db.collection.find({city: {$in: [value1, value2, ... valueN]}})
- $or = isi tarh logical operators bhi use hote hain jese $or krke eik array denge iske andr objects jin mein se jo match kr jaaye wo document return mein aajayega
- update in db = iske liye kch methods hain jese updateOne(), updateMany(), replaceOne() etc.
- updateOne() = iske andr ham pehle filter krte hain ke kis document ko update krna hai aur phr updated obj set krte hain using $set operator before 2nd parameter with key-value pair jo update krna hai, 3rd parameter bhi hota hai options ka wo baad mein dekhenge
- updateMany() = bhi same tarh use hota hai bs wo eik se zaada documents ko update krta hai
- replaceOne = completely replace krta hai yaani doosri key values add krdeta hai document mein aur sirf eik field nhi balke sb se replace krdeta hai
- return mein ye sb methods modified count dete hain yaani kitne documents ko modify kia wo bataate hain 
- nesting = internal nested key ko access krne ke liye ham string use krte hain yaani in quotation `""` like `{ "performance.marks": 88 }` is tarh ham kr skte hain iske bagair internally nested key access nhi hogi
- deleteOne and deleteMany = same tarh work krte hain bs find krke delete krte hain aur return mein deletedCount milta hai yanii jitne documents delete hue
- collection ko empty krne ke liye ham empty obj dete hain as a condition jis se sb delete hojaata hai like `db.collection.deleteMany({})`
- db.dropDatabase() = current database delete krne ke liye ye method use hota hai aur return mein hamein dropped database ka naamd milta hai

- Mongoose = eik library hai jo mongodb aur nodejs runtime environment ke beech connection create krti hai bcuz ham har waqt mongo shell use nhi kr skte for our development based web apps. Ye eik ODM library hai yaani object data modelling library
- mongoose ka use krke ham aur effecient tareeqe se backend aur database likh skte hain, schema feature bhi is mongoose mein hota hai like in sql
- mongoose ko install krke ham connect krte hain mongodb se with url aur wo url localhost ki tarh hota hai jo database server computer pr run horaha hota hai us se connect krna prta hai mongoose ko so that ham crud operations perform kr paayen
- mongoose ko connect krna ye eik asynchronous kaam hai bcuz har wo kaam jo alag se time leta ho aur line se code mein naa chalta ho usko kehte hain asynchronous aur uske liye async, await, then catch wagera use krte hain so ham yahan bhi async function mein connect krwayenge 