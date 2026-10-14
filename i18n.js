(function () {
    var SIMP_FROM = "並來係個們價優兒內兩別則剛創動務勝勵區協參員問啟單嗎嘗嚮嚴國圍圖執報場塊壽夠學宮實寫寶將專尋對導師帶幫幾張彈彙後從應戰戲換撳撿擇擊據擾敗敘數斷於時暢書會條構標樣機檔檢欄歷歸氣沒淺減測溫滿漁潑潔潛為煙營爭牠狀獎獲現環產畫當發確碼種稱積穩節範簡約紙級細終組結絕給經維綱網線編緩練縮總繪繼續義習腦與舉處號補裡製複見規視親覺觀觸計訓記設許訴評詞詢試話該詳認語說誰課請論講證識議讀變讓負貨費貼資購車較載輕輸轉迴這連進遊運過達遞遠適選還邊郵釋銀錄錯鍵鎖鏈鏡鑑長門閉開間閱關階隨險隻雙難電頁項順須預領頭題顏類顯風飛餘驗驟體鳥麼點";
    var SIMP_TO = "并来系个们价优儿内两别则刚创动务胜励区协参员问启单吗尝向严国围图执报场块寿够学宫实写宝将专寻对导师带帮几张弹汇后从应战戏换揿捡择击据扰败叙数断于时畅书会条构标样机档检栏历归气没浅减测温满渔泼洁潜为烟营争它状奖获现环产画当发确码种称积稳节范简约纸级细终组结绝给经维纲网线编缓练缩总绘继续义习脑与举处号补里制复见规视亲觉观触计训记设许诉评词询试话该详认语说谁课请论讲证识议读变让负货费贴资购车较载轻输转回这连进游运过达递远适选还边邮释银录错键锁链镜鉴长门闭开间阅关阶随险只双难电页项顺须预领头题颜类显风飞余验骤体鸟么点";
    var EN = {
        "親子共創 AI 學習遊戲": "Parent-Child AI Learning Games",
        "親子共創": "Parent-Child",
        "學習遊戲": "Learning Games",
        "從 Prompting 到 Vibe Coding": "From Prompting to Vibe Coding",
        "返回開始版面": "Back to the start",
        "Admin 登入": "Admin login",
        "請先選擇小學或中學。": "Choose primary or secondary first.",
        "小學": "Primary",
        "中學": "Secondary",
        "小四至小六": "Primary 4–6",
        "中一至中三": "Secondary 1–3",
        "返回選擇小學或中學": "Back to primary or secondary",
        "Go Play：引導式提示詞": "Go Play: Guided prompts",
        "Go Play：互動學習遊戲": "Go Play: Interactive games",
        "Go Make：親子共創": "Go Make: Create together",
        "互動學習遊戲": "Interactive game",
        "遊戲 Prompt": "Game prompt",
        "共創": "Create together",
        "AI指導": "AI guide",
        "中文": "Chinese",
        "英文": "English",
        "數學": "Mathematics",
        "請先選擇一個科目，每個科目分為三個程度。英文及數學部分須先下載參考圖片，上載至 Gemini，再按「複製」，將提示詞貼上。": "Choose a subject first. Each subject has three levels. For English and Mathematics, download the reference images, upload them to Gemini, then tap Copy and paste the prompt.",
        "資料來源：TSA P6 - 中國語文寫作評估": "Source: TSA P6 – Chinese Language writing assessment",
        "資料來源：Pre S1 HKAT - 英國語文閱讀評估": "Source: Pre-S1 HKAT – English reading assessment",
        "資料來源：Pre S1 HKAT - 數學科選擇題": "Source: Pre-S1 HKAT – Mathematics multiple choice",
        "下載英文篇章": "Download the English passage",
        "下載英文題目": "Download the English questions",
        "下載數學題目圖": "Download the maths diagram",
        "複製這段提示詞": "Copy this prompt",
        "已複製": "Copied",
        "稍後開放": "Opens later",
        "展示prompt": "Show prompt",
        "展示與AI的完整對話": "Show the full chat with AI",
        "下載完整代碼": "Download the full code",
        "上一頁": "Previous",
        "下一頁": "Next",
        "尋找桃花源": "Searching for the Peach Blossom Spring",
        "成語迴轉壽司店": "Idiom Conveyor Sushi",
        "需要幫忙": "Need help",
        "空白版": "Blank",
        "請輸入密碼，以取得填空提示。": "Enter the password to unlock the fill-in hints.",
        "密碼": "Password",
        "密碼不正確": "Incorrect password",
        "確認": "Confirm",
        "關閉": "Close",
        "請按「複製全部」，整份貼到 Gemini 對話，再按 AI 的問題一步步構思遊戲。": "Tap Copy all, paste the whole prompt into a Gemini chat, then follow the AI's questions to design the game.",
        "你希望 AI 是甚麼身份？例如：擅長製作哪一科教育遊戲的前端工程師？": "What role should the AI take? For example: a front-end engineer who makes educational games for one subject.",
        "遊戲叫甚麼名字？畫面像甚麼？想要甚麼風格？遊戲機制可以寫四點：玩家是誰、要做甚麼動作？答對和答錯分別發生甚麼，遊戲幾時結束？連續答對有甚麼獎勵，難度怎樣提升？題目從哪裡來，玩完看到甚麼？": "What is the game called? What should the screen look like, and what style do you want? Write four points about the mechanics: who is the player and what do they do? What happens for a right or wrong answer, and when does the game end? What reward is there for a streak, and how does the difficulty rise? Where do the questions come from, and what do you see at the end?",
        "用甚麼語言、給哪個年級？要支援滑鼠、觸控、手機和電腦嗎？程式要不要放在單一檔案？答案和動畫有甚麼規則？": "Which language and year level? Should it support mouse, touch, phone and computer? Should the program be one file? What rules apply to answers and animation?",
        "# 角色": "# Role",
        "# 背景與任務": "# Background and task",
        "# 指導與限制": "# Instructions and limits",
        "複製全部": "Copy all",
        "英文科 小鳥救援": "English: Bird Rescue",
        "數學科 超級市場": "Mathematics: Supermarket",
        "科學科 深海食物鏈": "Science: Deep-sea Food Chain",
        "數學科 代數迷宮": "Mathematics: Algebra Maze",
        "現場開關": "Live switches",
        "全部收回": "Hide all",
        "登出": "Log out",
        "收回全部項目？": "Hide every item?",
        "未能更改開關。": "Could not change the switch.",
        "活動控制": "Workshop controls",
        "撳一下，全場活動頁會跟着開放或收回。": "Tap once to open or hide an item for everyone.",
        "用你在 Supabase 建立的控制頁電郵和密碼登入。": "Sign in with the control-page email and password you created in Supabase.",
        "電郵": "Email",
        "登入": "Log in",
        "已開放": "Open",
        "未開放": "Hidden",
        "收回": "Hide",
        "開放": "Open",
        "Go Play：Level 1": "Go Play: Level 1",
        "Go Play：Level 2": "Go Play: Level 2",
        "Go Play：Level 3": "Go Play: Level 3",
        "遊戲 Prompt 及代碼": "Game prompt and code",
        "Go Make：AI指導": "Go Make: AI guide",
        "後台未允許讀取或更改開關。請到 Supabase 的 SQL Editor 執行：": "The backend is not allowed to read or change the switches. In the Supabase SQL Editor, run:",
        "未能連接後台。": "Could not reach the backend.",
        "找不到開關記錄。請確認 workshop_gates 有一行 id 為 1 的資料。": "No switch record was found. Check that workshop_gates has a row with id 1.",
        "已登入，但未能更改開關。請到 Supabase 的 SQL Editor 執行：": "You are signed in, but the switch could not be changed. In the Supabase SQL Editor, run:",
        "登入失敗。請核對電郵和密碼。": "Sign-in failed. Check the email and password.",
        "語言": "Language",
        "小四": "P4",
        "小五": "P5",
        "小六": "P6",
        "中一": "S1",
        "中二": "S2",
        "中三": "S3"
    };
    var BLOCKS = {
        "gamePrompt": [
            "# Role",
            "You are a front-end engineer who is good at making Chinese learning games.",
            "",
            "# Background and task",
            "Build a single-page game that can be played immediately, Idiom Conveyor Sushi: a light, soft Japanese conveyor-sushi restaurant, candy colours, large characters and objects, and clear type. It should feel like a game, not a worksheet.",
            "Game mechanics:",
            "",
            "The player is a sushi-shop apprentice. A customer sits at the top, next to a sentence with a blank and a patience bar. The middle shows the meaning of a correct idiom. A conveyor belt keeps moving underneath, showing only three or four idiom sushi pieces at a time, and only one is correct. The player taps the correct piece as it passes.",
            "A correct tap sends the sushi into the blank. The customer is pleased, the score rises, Combo increases by one, a one-line explanation appears for about a second, and the next customer arrives. A wrong tap makes the sushi fall, breaks the Combo, and lowers patience. If the correct piece passes without a tap, it counts as a missed order and patience falls again. The game ends when patience reaches zero or 60 seconds run out. Wrong answers and missed orders reduce patience only, not the remaining time.",
            "A correct streak builds Combo. From three in a row, the score is multiplied by 1.5, 2, then 3, with score and firework effects. Every fifth correct answer in a row brings a regular customer and double points. Difficulty rises: the belt starts slow and the distractors are quite different; in the middle the belt is faster and near-synonym or similar-looking idioms appear; near the end patience is shorter and sometimes there are two blanks that must be filled in order.",
            "Questions are drawn at random, including sentence completion, situations, and daily life, mainly idioms common in Hong Kong Primary 4 to 6. Include at least 100 idioms, each with a one-sentence explanation. At the end, show that round's idiom guide (idiom, original sentence, explanation), then allow a Word file to be downloaded.",
            "",
            "# Instructions and limits",
            "- Written traditional Chinese for Hong Kong, suitable for Primary 4 to 6",
            "- Support mouse, touch, phone and computer",
            "- Put HTML, CSS and JavaScript in a single file that runs when opened",
            "- A single blank has only one correct answer; two blanks must be tapped in the correct order",
            "- Keep the animation smooth: the moving belt, sushi flying in, a wrong piece falling, the customer's expression, and the score and Combo effects"
        ].join("\n"),
        "secGamePrompt": [
            "# Role",
            "You are a front-end engineer who is good at making Chinese learning games.",
            "",
            "# Background and task",
            "Build a single-page game that can be played immediately, Searching for the Peach Blossom Spring.",
            "Important:",
            "Use this picture as the only map background: https://i.imgur.com/gIqahgj.jpeg",
            "At the start, the camera zooms from the whole view to where the fisherman is, then follows the player to each place. After every place has been explored, the camera zooms back to the whole view and shows the complete peach-blossom spring.",
            "",
            "# Learning content",
            "The only source is The Peach Blossom Spring from the Hong Kong Education Bureau's recommended passages.",
            "Every word meaning, definition, question, answer and hint must follow the glossary in that recommended passage.",
            "Do not invent, guess, rewrite, or bring in meanings from another edition.",
            "",
            "When the game starts:",
            "The player is the fisherman exploring places in the peach-blossom spring. The camera looks down on the whole map, slowly zooms in, and pans to the fisherman, so it feels like entering the spring. The map has 6 to 8 stops. The camera follows the fisherman smoothly and focuses on the stop being explored.",
            "Each place starts a small challenge:",
            "• Drag words to match the correct meanings",
            "• Open a chest and choose the correct meaning",
            "• Find a named classical word",
            "• Unlock the next place",
            "• Return to the picture",
            "After a correct answer:",
            "• Show the word meaning",
            "• Light up that stop",
            "• Add it to the collection",
            "• The fisherman moves on",
            "• The camera glides to the next stop",
            "After a wrong answer:",
            "• Show a hint",
            "• Allow another try",
            "After every place is explored, the camera pulls back and up from the local scene to the whole map, showing every lit stop. Different endings depend on how the player answered, the first-try success rate, and the collection. Each ending needs its own title, summary screen and closing line, so the game is worth playing again. Finally show: \"Searching for the Peach Blossom Spring is complete\", and let the player tap any stop, zoom the picture freely, and review the meanings and collection.",
            "",
            "# Instructions and limits",
            "- Exploring and discovering with the picture I provide is the core experience. At the smallest size the picture is fixed to the window and cannot be moved, but it can be zoomed, and it can be moved while zoomed in.",
            "- Camera moves, focus and zoom should feel smooth and animated.",
            "- The screen should feel like an old illustrated book and a mystery, with light colours overall.",
            "- Characters and interactive objects should be easy to see.",
            "- Focus on one task at a time.",
            "- Word meanings should be short and clear, suitable for Hong Kong Secondary 1 to 3.",
            "- Support phone and computer.",
            "- At the end there must be a pull-back shot of the whole peach-blossom spring, so the player feels they have finished one complete journey."
        ].join("\n"),
        "supermarket:role": "You are a front-end engineer who is good at making mathematics learning games.",
        "supermarket:task": "Build a single-page game that can be played immediately, Supermarket: a light-coloured supermarket, with large goods and numbers and clear type. It should feel like a game, not a test paper or worksheet.\nGame mechanics:\nThe player is the cashier. Shelves are on the left, a trolley on the right, a shopping list at the top, and number keys at the bottom. The list says which goods to drag and which number to enter, such as the total price, the change, the total number of items, or how many in each bag. The screen must not show the total, the count, or the equation. The player drags goods into the trolley, or drags extras back to the shelf, enters the result, then taps checkout.\nIf the goods and the number are both correct, print a receipt, add points, show the equation for about a second, then go to the next question. If the goods or the number are wrong, the goods bounce back, a one-line hint appears, and the same question can be tried again. There is no timer, and a wrong answer does not end the game.\nQuestions go from easy to hard in order. Do not jump around at random. Start with adding two items, then adding several items, then subtraction for change, then multiplication for several per box, then division for sharing into bags, and the last list must use two operations in order.\nInclude at least 24 questions, mainly addition, subtraction, multiplication and division for Primary 4 to 6. After all questions, show that round's lists, the numbers to find, and the correct equations, then allow a Word file to be downloaded.",
        "supermarket:limit": "- Traditional Chinese, suitable for Primary 4 to 6\n- Support mouse, touch, phone and computer\n- Put HTML, CSS and JavaScript in a single file that runs when opened\n- Do not show the total, the count, or the equation before checkout\n- Each shopping list has only one correct result; the last question has two steps in order\n- Keep the animation smooth: dragging goods, bouncing back to the shelf, pressing number keys, printing a receipt",
        "foodchain:role": "You are a front-end engineer who is good at making science learning games.",
        "foodchain:task": "Build a single-page game that can be played immediately, Deep-sea Food Chain. Light-coloured water, and large creatures.\n\nImportant:\nThere is a food-chain blank along the bottom. Three creatures float above it, bobbing slightly. The player drags the correct next link into the blank.\n\n# Learning content\nThe content is food chains, producers, consumers and decomposers for Hong Kong Secondary 1 to 3.\nEnergy flows from the prey to the predator. The relationship must be correct.\n\nWhen the game starts:\nThe first cell already holds a producer, such as seaweed. From three creatures, the player drags the one that eats it.\nAfter a correct answer:\n• The creature lands in the cell, and its role and the energy direction are shown\n• One more cell is added, and the three creatures are replaced\nAfter a wrong answer:\n• The creature snaps back, with a one-line hint\n• It can be dragged again at once\nAfter 4 chains of 3 creatures each, show the food web for this round. Titles by first-try success: trainee diver, ocean observer, food-chain navigator. Finally show: \"Deep-sea Food Chain complete\", and allow each chain to be reviewed.",
        "foodchain:limit": "- Traditional Chinese, suitable for Secondary 1 to 3\n- Support mouse, touch, phone and computer\n- Put HTML, CSS and JavaScript in a single file that runs when opened\n- Each cell has only one correct creature\n- Keep the animation smooth: creatures floating, dropping into a cell, snapping back",
        "algebra:role": "You are a front-end engineer who is good at making mathematics learning games.",
        "algebra:task": "Build a single-page game that can be played immediately, Algebra Maze. Light-coloured passages, with a large character and large blocks.\n\nImportant:\nThe player moves along the path and picks up algebra blocks. Each door shows only one target, with no options listed. The player drags blocks onto the door and combines them. The door opens only when the combination is correct. This is a flat passage, not a 3D maze.\nYou write the questions, 6 doors, from easy to hard, with no repeats. Use the example below only as a reference. Do not use the same expression for all six.\n\nExample:\nThe target is x² − 9. On the ground are (x + 3), (x − 3), and other blocks that are not needed. The player pairs those two blocks and the door opens.\n\n# Learning content\nThe content is index laws and factorisation for Hong Kong Secondary 1 to 3.\nWhen multiplying powers with the same base, add the indices; when dividing, subtract them; an index outside brackets is multiplied in. Factorisation includes taking out a common factor and the difference of squares.\nThe first 3 doors use index laws. The last 3 use factorisation. The last door must take out a common factor first, then factorise.\n\nWhen the game starts:\nThe character walks to door 1. The correct blocks are nearby, along with blocks that are not needed.\nAfter a correct answer:\n• The blocks lock onto the door, the door opens, and the character walks through\n• Show the combined step\nAfter a wrong answer:\n• The blocks snap back to the ground, with a hint about indices or factors\n• They can be dragged again\nAfter 6 doors, list each target and combination. Titles by first-try success: trainee explorer, algebra guide, maze master. Finally show: \"Algebra Maze complete\".",
        "algebra:limit": "- Traditional Chinese, suitable for Secondary 1 to 3\n- Support mouse, touch, phone and computer\n- Put HTML, CSS and JavaScript in a single file that runs when opened\n- Each door has only one correct combination\n- Keep the animation smooth: walking, picking up blocks, combining, snapping back, opening the door",
        "mathBasic": "Attached the diagram (jpg or pdf)\nThe figure above is made of two trapeziums, P and Q. The area of Q is 30 cm^2. What is the value of h?",
        "mathMid": "Attached the diagram (jpg or pdf)\nYou are my mathematics teacher. Guide me through this question. Do not give me the answer directly.\nThe figure above is made of two trapeziums, P and Q. The area of Q is 30 cm^2. What is the value of h?",
        "mathHighPri": "Attached the diagram (jpg or pdf)\n# Role\nYou are a Hong Kong Primary 6 mathematics teacher.\n# Task\nThe figure is made of two trapeziums, P and Q. The area of Q is 30 cm^2. What is the value of h?\n# Guidance\n1. Do not tell me the answer, and do not write out the calculation steps.\n2. Break the problem into several smaller questions that follow a problem-solving process.\n3. List the mathematics skills needed in the problem.",
        "mathHighSec": "Attached the diagram (jpg or pdf)\n# Role\nYou are a Hong Kong Secondary 1 to 3 mathematics teacher.\n# Task\nThe figure is made of two trapeziums, P and Q. The area of Q is 30 cm^2. What is the value of h?\n# Guidance\n1. Do not tell me the answer, and do not write out the calculation steps.\n2. Break the problem into several smaller questions that follow a problem-solving process.\n3. List the mathematics skills needed in the problem."
    };

    function storedLang() {
        try {
            var saved = localStorage.getItem("pcws-lang");
            if (saved === "zh-HK" || saved === "zh-CN" || saved === "en") return saved;
        } catch (e) {}
        return "zh-HK";
    }

    var lang = storedLang();

    function toSimp(text) {
        var out = "";
        for (var i = 0; i < text.length; i++) {
            var ch = text.charAt(i);
            var at = SIMP_FROM.indexOf(ch);
            out += at >= 0 ? SIMP_TO.charAt(at) : ch;
        }
        return out.replace(/滑鼠/g, "鼠标").replace(/甚么/g, "什么");
    }

    function tx(text) {
        var value = text == null ? "" : String(text);
        if (lang === "zh-HK") return value;
        if (lang === "zh-CN") return toSimp(value);
        return Object.prototype.hasOwnProperty.call(EN, value) ? EN[value] : value;
    }

    function txBlock(id, fallback) {
        var value = fallback == null ? "" : String(fallback);
        if (lang === "zh-HK") return value;
        if (lang === "zh-CN") return toSimp(value);
        return Object.prototype.hasOwnProperty.call(BLOCKS, id) ? BLOCKS[id] : value;
    }

    function htmlLang() {
        if (lang === "en") return "en";
        if (lang === "zh-CN") return "zh-Hans";
        return "zh-HK";
    }

    function markLangButtons() {
        var buttons = document.querySelectorAll("[data-lang]");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute("aria-pressed", buttons[i].getAttribute("data-lang") === lang ? "true" : "false");
        }
        document.documentElement.lang = htmlLang();
    }

    function setLang(next) {
        if (next !== "zh-HK" && next !== "zh-CN" && next !== "en") return;
        lang = next;
        try { localStorage.setItem("pcws-lang", next); } catch (e) {}
        markLangButtons();
        if (window.onLangChange) window.onLangChange();
    }

    function closeLangMenus() {
        var menus = document.querySelectorAll(".lang-menu");
        for (var i = 0; i < menus.length; i++) {
            var pop = menus[i].querySelector(".lang-pop");
            var globe = menus[i].querySelector(".lang-globe");
            if (pop) pop.hidden = true;
            if (globe) globe.setAttribute("aria-expanded", "false");
        }
    }

    document.addEventListener("click", function (event) {
        var langBtn = event.target.closest && event.target.closest("[data-lang]");
        if (langBtn) {
            setLang(langBtn.getAttribute("data-lang"));
            closeLangMenus();
            return;
        }
        var globe = event.target.closest && event.target.closest(".lang-globe");
        if (globe) {
            var menu = globe.closest(".lang-menu");
            var pop = menu && menu.querySelector(".lang-pop");
            var willOpen = pop && pop.hidden;
            closeLangMenus();
            if (willOpen) {
                pop.hidden = false;
                globe.setAttribute("aria-expanded", "true");
            }
            return;
        }
        if (!event.target.closest || !event.target.closest(".lang-menu")) closeLangMenus();
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeLangMenus();
    });

    window.tx = tx;
    window.txBlock = txBlock;
    window.currentLang = function () { return lang; };
    window.setLang = setLang;
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", markLangButtons);
    } else {
        markLangButtons();
    }
})();
