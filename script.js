// script.js - Duolingo DET Prep Core Logic (Vanilla JS)

// ==================== 数据定义 ====================
const questionsData = [
    {
        "title": "A Gentle Touch, A Powerful Impact",
        "text": "Maria gently placed her hand on the bird’s wing, feeling its delicate bones and soft feathers. Wi[BLANK][BLANK] a look o[BLANK] determination i[BLANK] her ey[BLANK][BLANK], she sa[BLANK][BLANK], “I wi[BLANK][BLANK] do every[BLANK][BLANK][BLANK][BLANK][BLANK] I can t[BLANK] help y[BLANK][BLANK], little one.” And with that, she carefully began to treat the injured creature.",
        "answers": ["t", "h", "f", "n", "e", "s", "i", "d", "l", "l", "t", "h", "i", "n", "g", "o", "o", "u"]
    },
    {
        "title": "Bhutan’s Unique Sporting Tradition",
        "text": "Bhutan, a small country nestled in the Himalayas, has a rich sporting culture that is deeply rooted in tradition. Archery i[BLANK] the nati[BLANK][BLANK][BLANK][BLANK] sport of Bhutan, and compet[BLANK][BLANK][BLANK][BLANK][BLANK][BLANK] are he[BLANK][BLANK] throughout the cou[BLANK][BLANK][BLANK][BLANK]. Other pop[BLANK][BLANK][BLANK][BLANK] sports inc[BLANK][BLANK][BLANK][BLANK] basketball, foot[BLANK][BLANK][BLANK][BLANK], and tradi[BLANK][BLANK][BLANK][BLANK][BLANK][BLANK] Bhutanese ga[BLANK][BLANK][BLANK] such a[BLANK] digor and khuru. These are played throughout the year.",
        "answers": ["s", "o", "n", "a", "l", "i", "t", "i", "o", "n", "s", "l", "d", "n", "t", "r", "y", "u", "l", "a", "r", "l", "u", "d", "e", "b", "a", "l", "l", "t", "i", "o", "n", "a", "l", "m", "e", "s"]
    },
    {
        "title": "From Small Town to Big City",
        "text": "Johnson was raised in a small town in Kansas. He atte[BLANK][BLANK][BLANK][BLANK] the lo[BLANK][BLANK][BLANK] high sch[BLANK][BLANK][BLANK] and th[BLANK][BLANK] went o[BLANK] to study business a[BLANK] a comm[BLANK][BLANK][BLANK][BLANK][BLANK] college. In 2010, he mo[BLANK][BLANK][BLANK] to New York City to pur[BLANK][BLANK][BLANK] his car[BLANK][BLANK][BLANK]. He sta[BLANK][BLANK][BLANK][BLANK] working i[BLANK] finance a[BLANK][BLANK] quickly climbed t[BLANK][BLANK] corporate lad[BLANK][BLANK][BLANK]. Today, he is a successful executive in one of the city’s top firms.",
        "answers": ["n", "d", "e", "d", "c", "a", "l", "o", "o", "l", "e", "n", "o", "s", "m", "u", "n", "i", "t", "y", "v", "e", "d", "s", "u", "e", "r", "e", "d", "t", "a", "r", "t", "e", "d", "n", "d", "h", "d"]
    },
    {
        "title": "A Moment of Calm",
        "text": "The rain had finally stopped, leaving behind a fresh, clean scent in the air. I s[BLANK][BLANK] on t[BLANK][BLANK] porch, sip[BLANK][BLANK][BLANK][BLANK] my cof[BLANK][BLANK][BLANK] and watc[BLANK][BLANK][BLANK][BLANK] the bi[BLANK][BLANK][BLANK] flit ab[BLANK][BLANK][BLANK] in the garden. The sound of t[BLANK][BLANK] wind chimes w[BLANK][BLANK] soothing, a[BLANK][BLANK] I fe[BLANK][BLANK] a sense of peace wash ov[BLANK][BLANK] me. It was the perfect way to start the day.",
        "answers": ["a", "t", "h", "e", "p", "p", "i", "n", "g", "f", "f", "e", "e", "h", "i", "n", "g", "r", "d", "s", "o", "u", "t", "h", "e", "a", "s", "a", "s", "n", "d", "l", "t", "e", "r"]
    },
    {
        "title": "The Great Escape",
        "text": "“Quick, we need to get out of here!” I whispered to my friend. We h[BLANK][BLANK] snuck in[BLANK][BLANK] the o[BLANK][BLANK] abandoned man[BLANK][BLANK][BLANK][BLANK], but n[BLANK][BLANK] we co[BLANK][BLANK][BLANK] hear foot[BLANK][BLANK][BLANK][BLANK][BLANK] echoing thr[BLANK][BLANK][BLANK][BLANK] the halls. We r[BLANK][BLANK] down the sta[BLANK][BLANK][BLANK] and “out” and “the” front do[BLANK][BLANK], not stop[BLANK][BLANK][BLANK][BLANK] until w[BLANK] were sa[BLANK][BLANK] in the woods beh[BLANK][BLANK][BLANK] the ho[BLANK][BLANK][BLANK]. Our hearts were pounding, but we were free.",
        "answers": ["a", "d", "t", "o", "l", "d", "i", "o", "n", "e", "u", "t", "s", "p", "e", "g", "o", "u", "a", "s", "t", "o", "p", "p", "n", "e", "f", "a", "e", "i"]
    },
    {
        "title": "The Diverse Habitats of Marine Life",
        "text": "Marine creatures can be found in every ocean of the world. Some creat[BLANK][BLANK][BLANK][BLANK] thrive i[BLANK] the freezing wat[BLANK][BLANK][BLANK] of t[BLANK][BLANK] Arctic, wh[BLANK][BLANK][BLANK] others prefer t[BLANK][BLANK] warm wat[BLANK][BLANK][BLANK] of t[BLANK][BLANK] tropics. Marine li[BLANK][BLANK] can b[BLANK] found i[BLANK] coral re[BLANK][BLANK][BLANK], kelp forests, deep s[BLANK][BLANK] trenches, a[BLANK][BLANK] even i[BLANK] hydrothermal ve[BLANK][BLANK][BLANK]. The diversity of marine habitats is truly astonishing.",
        "answers": ["u", "r", "e", "s", "n", "e", "r", "s", "h", "e", "r", "e", "h", "e", "a", "t", "e", "r", "s", "f", "e", "e", "s", "n", "d", "n", "d"]
    },
    {
        "title": "The Mystery of Black Holes",
        "text": "Black holes are mysterious objects in space that have such a strong gravitational pull that nothing, not even light, can escape. Th[BLANK][BLANK] are for[BLANK][BLANK][BLANK] when mas[BLANK][BLANK][BLANK][BLANK] stars collapse i[BLANK] on thems[BLANK][BLANK][BLANK][BLANK][BLANK], creating a singu[BLANK][BLANK][BLANK][BLANK][BLANK][BLANK][BLANK]—a po[BLANK][BLANK][BLANK] o[BLANK] infinite den[BLANK][BLANK][BLANK][BLANK]. Black holes can be found at the center of most galaxies, including our own Milky Way.",
        "answers": ["e", "y", "m", "e", "d", "s", "s", "i", "v", "e", "n", "e", "l", "v", "e", "s", "l", "a", "r", "i", "t", "y", "i", "n", "t", "e", "f", "s", "i", "t", "y"]
    }
];

// ==================== 全局状态变量 ====================
let gameState = 'welcome';
let invitationCodeInput = '';
let invitationCodeError = '';
let currentQuestionIndex = 0;
let inputValues = []; // 存储用户输入，扁平数组
let feedbackMessage = '';
let isCorrect = null; // null: 未检查, true: 正确, false: 错误
let showCorrectAnswer = false;
let timeLeft = 0;
let timerInterval = null; // 用于存储计时器 ID

const TIMER_DURATION = 180;
const INVITATION_CODE = '130';

// 填空输入框的引用 Map - 用于焦点管理
const inputRefsMap = new Map();

// ==================== DOM 元素引用 ====================
const mainCard = document.getElementById('main-card');

// ==================== 辅助函数 ====================
function formatTime(s) {
    const minutes = String(Math.floor(s / 60)).padStart(2, '0');
    const seconds = String(s % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
}

// ==================== 渲染函数 (核心！) ====================
function render() {
    let htmlContent = '';
    const currentQuestion = questionsData[currentQuestionIndex]; // 获取当前题目

    if (gameState === 'welcome') {
        htmlContent = `
            <div class="text-center flex flex-col items-center w-full h-full justify-center">
                <img src="unnamed.png" alt="Duolingo Logo" class="w-36 h-36 rounded-full mb-8 shadow-lg" onerror="this.onerror=null;this.src='https://placehold.co/144x144/E0E0E0/333333?text=Logo+Missing';">
                <h1 class="text-3xl font-bold text-blue-600 mb-4">Duolingo DET Prep with Fengfeng</h1>
                <input id="invitationCodeInput" type="text"
                    class="px-4 py-2 border border-gray-300 rounded-md w-60 text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    placeholder="请输入邀请码" value="${invitationCodeInput}">
                ${invitationCodeError ? `<p class="text-red-500 text-sm mt-2">${invitationCodeError}</p>` : ''}
                <button id="enterButton" class="button-base button-blue mt-4">进入</button>
            </div>
        `;
    } else if (gameState === 'questionTypeSelection') {
        htmlContent = `
            <div class="text-center flex flex-col items-center w-full h-full justify-center">
                <h2 class="text-2xl font-bold text-blue-600 mb-6">选择题型</h2>
                <button id="readAndCompleteButton" class="button-base button-green mb-4 px-12 py-4 text-xl">阅读并补全</button>
                <p class="text-gray-500 text-sm mt-4">更多题型即将推出！</p>
            </div>
        `;
    } else if (gameState === 'readAndComplete') {
        if (!currentQuestion) {
            htmlContent = `
                <div class="text-center text-red-600 text-lg font-semibold w-full h-full flex items-center justify-center">
                    题目数据错误或未加载。请检查 questions.json 文件内容。
                </div>
            `;
        } else {
            const allFilled = inputValues.every(char => char.trim() !== '');
            const canCheck = allFilled && isCorrect === null && timeLeft > 0;

            let blanksHtml = '';
            const parts = currentQuestion.text.split('[BLANK]');
            let charInputIdx = 0; // 填空索引
            parts.forEach((part, i) => {
                blanksHtml += `<span class="whitespace-pre-wrap">${part}</span>`;
                if (charInputIdx < currentQuestion.answers.length) {
                    const showResult = isCorrect !== null || timeLeft === 0;
                    const filledChar = inputValues[charInputIdx] || '';
                    const isCorrectChar = filledChar.toLowerCase() === currentQuestion.answers[charInputIdx].toLowerCase();
                    const inputClass = `char-input ${showResult ? (isCorrectChar ? 'correct' : 'incorrect') : ''}`;
                    const disabledAttr = showResult ? 'disabled' : '';

                    blanksHtml += `
                        <input type="text" maxlength="1" class="${inputClass}"
                            value="${filledChar}" data-index="${charInputIdx}" ${disabledAttr} tabIndex="${charInputIdx + 1}">
                    `;
                    charInputIdx++;
                }
            });

            let feedbackHtml = '';
            if (feedbackMessage) {
                const feedbackColorClass = isCorrect ? 'text-green-600' : 'text-red-600';
                feedbackHtml = `<p class="mt-6 text-center text-lg font-semibold ${feedbackColorClass}">${feedbackMessage}</p>`;
            }

            let correctAnswerHtml = '';
            if (showCorrectAnswer) {
                let correctFullTextHtml = '';
                const correctParts = currentQuestion.text.split('[BLANK]');
                let correctAnsIdx = 0;
                correctParts.forEach((part, i) => {
                    correctFullTextHtml += `<span class="whitespace-pre-wrap">${part}</span>`;
                    if (correctAnsIdx < currentQuestion.answers.length) {
                        correctFullTextHtml += `<span class="text-blue-600 font-bold underline">${currentQuestion.answers[correctAnsIdx]}</span>`;
                        correctAnsIdx++;
                    }
                });

                correctAnswerHtml = `
                    <div class="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-800 rounded-md shadow-sm w-full">
                        <p class="font-semibold mb-2">正确答案:</p>
                        <p class="whitespace-pre-wrap text-lg">${correctFullTextHtml}</p>
                    </div>
                `;
            }

            htmlContent = `
                <div class="absolute top-4 left-4">
                    <button id="prevButton" class="button-base bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}" ${currentQuestionIndex === 0 ? 'disabled' : ''}>上一题</button>
                </div>
                <div class="absolute top-4 right-4">
                    <button id="nextButton" class="button-base bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm ${currentQuestionIndex === questionsData.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}" ${currentQuestionIndex === questionsData.length - 1 ? 'disabled' : ''}>下一题</button>
                </div>

                <div class="text-center text-blue-600 text-xl font-bold mb-1 w-full">Duolingo DET Prep - 阅读并补全</div>
                <div class="text-center text-gray-500 text-sm mb-2 w-full">${currentQuestion.title}</div>
                <div class="text-center text-sm text-gray-500 mb-4 w-full">
                    剩余时间: <span class="text-blue-600 font-bold">${formatTime(timeLeft)}</span>　 第 ${currentQuestionIndex + 1} 题 / 共 ${questionsData.length} 题
                </div>

                <div id="blanks-container" class="flex flex-wrap gap-1 leading-relaxed justify-start items-baseline text-lg w-full mb-6">${blanksHtml}</div>

                ${feedbackHtml}
                ${correctAnswerHtml}

                <div class="text-center mt-6 flex justify-center gap-4 w-full">
                    <button id="checkAnswerButton" class="button-base ${canCheck ? 'button-blue' : 'button-disabled opacity-40'}" ${canCheck ? '' : 'disabled'}>检查答案</button>
                    <button id="resetButton" class="button-base button-yellow">重做</button>
                </div>
            `;
        }
    }

    mainCard.innerHTML = htmlContent; // 更新 DOM

    // 每次渲染后，重新绑定事件监听器和收集输入框引用
    bindEventListeners();
    collectInputRefs(); // 确保在 DOM 更新后收集引用

    // 调试辅助
    // console.log("Current gameState:", gameState);
    // console.log("Current inputValues:", inputValues);
    // console.log("Current inputRefsMap size:", inputRefsMap.size);
    // console.log("First input ref in map:", inputRefsMap.get(0));
}

// ==================== 事件绑定与引用收集 ====================
function bindEventListeners() {
    // 欢迎界面
    const invitationCodeInputEl = document.getElementById('invitationCodeInput');
    if (invitationCodeInputEl) {
        invitationCodeInputEl.oninput = (e) => { invitationCodeInput = e.target.value; };
        invitationCodeInputEl.onkeydown = (e) => { if (e.key === 'Enter') handleInvitationCodeSubmit(); };
        // 尝试在欢迎界面自动聚焦
        // invitationCodeInputEl.focus(); // 不在这里直接focus，等待render完成后
    }
    const enterButton = document.getElementById('enterButton');
    if (enterButton) {
        enterButton.onclick = handleInvitationCodeSubmit;
    }

    // 题型选择界面
    const readAndCompleteButton = document.getElementById('readAndCompleteButton');
    if (readAndCompleteButton) {
        readAndCompleteButton.onclick = () => {
            gameState = 'readAndComplete';
            // 立即重置状态并渲染，以确保输入框正确生成
            resetQuestionState();
            render();
            // 在DOM更新后尝试聚焦第一个输入框
            requestAnimationFrame(() => {
                if (inputRefsMap.get(0)) {
                    inputRefsMap.get(0).focus();
                } else {
                    console.warn("Could not focus first input after state change.");
                }
            });
        };
    }

    // 阅读并补全界面 - 填空输入框事件
    // 注意：事件委托或在 render 后立即绑定
    const blanksContainer = document.getElementById('blanks-container');
    if (blanksContainer) {
        blanksContainer.addEventListener('input', (e) => {
            if (e.target.classList.contains('char-input')) {
                const index = parseInt(e.target.dataset.index);
                handleCharChange(e, index);
            }
        });
        blanksContainer.addEventListener('keydown', (e) => {
            if (e.target.classList.contains('char-input')) {
                const index = parseInt(e.target.dataset.index);
                handleCharKeyDown(e, index);
            }
        });
    }

    // 导航按钮
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const checkAnswerButton = document.getElementById('checkAnswerButton');
    const resetButton = document.getElementById('resetButton');

    if (prevButton) prevButton.onclick = goToPrev;
    if (nextButton) nextButton.onclick = goToNext;
    if (checkAnswerButton) checkAnswerButton.onclick = checkAnswer;
    if (resetButton) resetButton.onclick = resetQuestionStateAndRender;
}

function collectInputRefs() {
    inputRefsMap.clear(); // 每次收集前清空
    const charInputs = document.querySelectorAll('.char-input');
    charInputs.forEach(inputEl => {
        const index = parseInt(inputEl.dataset.index);
        if (inputEl && !isNaN(index)) { // 确保元素存在且索引有效
            inputRefsMap.set(index, inputEl);
        }
    });
    // console.log("Input refs map after collection:", inputRefsMap);
}

// ==================== 状态逻辑函数 (直接修改变量并调用 render) ====================
function resetQuestionState() {
    const currentQ = questionsData[currentQuestionIndex];
    if (!currentQ || !Array.isArray(currentQ.answers)) {
        console.warn("Cannot reset state: questionsData not ready.");
        return;
    }
    inputValues = Array(currentQ.answers.length).fill('');
    feedbackMessage = '';
    isCorrect = null;
    showCorrectAnswer = false;
    timeLeft = TIMER_DURATION;
    
    // 清除现有计时器
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    // 仅当在答题状态时才启动计时器
    if (gameState === 'readAndComplete') {
        timerInterval = setInterval(() => {
            timeLeft--;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timeLeft = 0;
                if (isCorrect === null) {
                    checkAnswer();
                }
            }
            render(); // 每秒渲染一次以更新时间
        }, 1000);
    }
}

function resetQuestionStateAndRender() {
    resetQuestionState();
    render(); // 重新渲染以显示新题目
    requestAnimationFrame(() => { // 再次尝试聚焦
        const firstInput = inputRefsMap.get(0);
        if (firstInput) {
            firstInput.focus();
        }
    });
}

// ==================== 导航函数 ====================
function goToNext() {
    if (currentQuestionIndex < questionsData.length - 1) {
        currentQuestionIndex++;
        resetQuestionState();
        render(); // 渲染新题目
        requestAnimationFrame(() => { // 再次尝试聚焦
            const firstInput = inputRefsMap.get(0);
            if (firstInput) {
                firstInput.focus();
            }
        });
    }
}

function goToPrev() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        resetQuestionState();
        render(); // 渲染新题目
        requestAnimationFrame(() => { // 再次尝试聚焦
            const firstInput = inputRefsMap.get(0);
            if (firstInput) {
                firstInput.focus();
            }
        });
    }
}

// ==================== 初始化与全局运行 ====================
document.addEventListener('DOMContentLoaded', () => {
    // 首次渲染欢迎界面
    render();
    // 尝试在欢迎界面的邀请码输入框自动聚焦
    const invitationInput = document.getElementById('invitationCodeInput');
    if (invitationInput) {
        invitationInput.focus();
    }
});
