node ya node -v command se check kr skte hain ke install hai hamare system mein ya nhi aur konsa version hai
nodejs ki website se lts version download kr skte hain easily aur specific system ke liye bhi kr skte hain
node sirf server side ke liye nhi hai even vscode jesi application bhi nodejs pr bani hai so bht saare kaamo mein se nodejs ka eik popular use server side prograammming hai
nodejs javascript ka runtime environment hai jo javascript ko browser se bahar bhi run krne deta hai yaani eik environment provide krta hai, is se pehle python jesi libraries ka use krke backend bnta hai aur phr 2009 mein nodejs release hua jo ab bht popular bhi hai aur sbse imp JS based hai so javascript ki knowledge ko hi ham backend pr implement kr skte hain
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