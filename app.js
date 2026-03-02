// ================= MAIN NAVIGATION =================
function openSection(type){
let content=document.getElementById("content");


// ================= GYM =================
if(type==="gym"){
content.innerHTML=`
<div class="section">
<h2>💪 6 Day Gym Split</h2>

Day 1 – Chest + Triceps<br>
Bench Press – 4x8<br>
Incline DB – 3x10<br>
Cable Fly – 3x12<br>
Tricep Pushdown – 3x12<br><br>

Day 2 – Back + Biceps<br>
Pullups – 4x8<br>
Barbell Row – 3x10<br>
Lat Pulldown – 3x12<br>
Barbell Curl – 3x12<br><br>

Day 3 – Legs<br>
Squat – 4x10<br>
Leg Press – 3x12<br>
Ham Curl – 3x12<br>
Calf Raise – 4x15<br><br>

Day 4 – Shoulders<br>
Overhead Press – 4x8<br>
Lateral Raise – 3x12<br>
Rear Delt Fly – 3x12<br><br>

Day 5 – Arms<br>
Bicep Curl – 4x10<br>
Tricep Dips – 3x12<br>
Hammer Curl – 3x12<br><br>

Day 6 – Full Body<br>
Deadlift – 4x6<br>
Burpees – 3x15<br>
Pushups – 3x20<br><br>

Day 7 – REST
</div>
`;
}


// ================= MEAL =================
if(type==="meal"){
content.innerHTML=`
<div class="section">
<h2>🥗 3 Hour Muscle Gain Meal Plan</h2>

Meal 1 – Oats + Banana + Milk (7 AM)<br>
Meal 2 – Peanut Butter Bread (10 AM)<br>
Meal 3 – Rice + Dal + 4 Eggs (1 PM)<br>
Meal 4 – Fruits + Nuts (4 PM)<br>
Meal 5 – Paneer/Chicken + Roti (7 PM)<br>
Meal 6 – Milk + Peanut (10 PM)<br><br>

Target: 3000+ Calories Daily
</div>
`;
}


// ================= SSC PRO =================
if(type==="ssc"){
content.innerHTML=`
<div class="section">
<h2>📚 SSC CGL PRO TARGET</h2>

${makeSubject("reasoning","Reasoning",[
"Analogy","Classification","Series","Coding-Decoding",
"Blood Relation","Direction","Venn Diagram","Syllogism",
"Statement & Conclusion","Seating Arrangement",
"Non-Verbal","Paper Folding","Embedded Figures"
])}

${makeSubject("math","Quantitative Aptitude",[
"Number System","Simplification","Percentage",
"Profit & Loss","Discount","Simple Interest",
"Compound Interest","Ratio & Proportion",
"Partnership","Average","Time & Work",
"Time Speed Distance","Trigonometry",
"Algebra","Geometry","Mensuration","Data Interpretation"
])}

${makeSubject("english","English",[
"Reading Comprehension","Cloze Test","Error Detection",
"Sentence Improvement","Fill in the Blanks",
"Synonyms & Antonyms","One Word Substitution",
"Idioms & Phrases","Voice","Narration","Para Jumbles"
])}

${makeSubject("ga","General Awareness",[
"History Ancient","History Medieval","History Modern",
"Geography India","Geography World",
"Polity Constitution","Parliament","Judiciary",
"Economics","Budget","Banking",
"Physics","Chemistry","Biology",
"Static GK","Current Affairs"
])}

<br>
<div style="background:#ddd;height:10px;border-radius:5px;">
<div id="sscBar" style="height:10px;background:green;width:0%;border-radius:5px;"></div>
</div>
<div id="sscText">0% Target Completed</div>

</div>
`;
setupSSC();
}


// ================= BUSINESS =================
if(type==="business"){
content.innerHTML=`
<div class="section">
<h2>💰 Business Tracker</h2>

<h3>30 Winning Product List</h3>
<textarea id="products" rows="15" placeholder="
1.
2.
3.
4.
5.
6.
7.
8.
9.
10.
11.
12.
13.
14.
15.
16.
17.
18.
19.
20.
21.
22.
23.
24.
25.
26.
27.
28.
29.
30.
"></textarea>

<br><br>

<h3>Profit Calculator</h3>
<input id="rev" placeholder="Revenue">
<input id="ad" placeholder="Ad Spend">
<button onclick="calcProfit()">Calculate</button>
<input id="profit" readonly placeholder="Profit">

</div>
`;
}

}



// ================= PROFIT =================
function calcProfit(){
let r=parseFloat(document.getElementById("rev").value)||0;
let a=parseFloat(document.getElementById("ad").value)||0;
document.getElementById("profit").value=r-a;
}



// ================= SSC FUNCTIONS =================

function makeSubject(id,title,topics){
let html="";
topics.forEach(t=>{
html+=makeTopic(t);
});
return `
<h3 onclick="toggleSubject('${id}')">${title} ▼</h3>
<div id="${id}" style="display:none;margin-left:10px;">
${html}
</div>
`;
}

function makeTopic(name){
return `
<label>
<input type="checkbox" class="ssc"> ${name}
</label><br>
`;
}

function toggleSubject(id){
let el=document.getElementById(id);
el.style.display = el.style.display==="none" ? "block" : "none";
}

function setupSSC(){
let boxes=document.querySelectorAll(".ssc");

boxes.forEach((box,i)=>{
box.checked=localStorage.getItem("ssc"+i)==="true";

box.addEventListener("change",()=>{
localStorage.setItem("ssc"+i,box.checked);
updateSSCProgress();
});
});

updateSSCProgress();
}

function updateSSCProgress(){
let boxes=document.querySelectorAll(".ssc");
let total=boxes.length;
let done=0;

boxes.forEach(b=>{
if(b.checked) done++;
});

let percent = total===0 ? 0 : Math.round((done/total)*100);

document.getElementById("sscBar").style.width=percent+"%";
document.getElementById("sscText").innerText=percent+"% Target Completed";
}