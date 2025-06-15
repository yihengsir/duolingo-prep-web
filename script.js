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

// ==================== 状态逻辑函数 (在 render 之前定义) ====================

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
    
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

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

function handleCharChange(e, index) {
    const val = e.target.value.slice(0, 1).toLowerCase();
    inputValues[index] = val; // 直接修改数组
    feedbackMessage = '';
    isCorrect = null;
    showCorrectAnswer = false;
    render(); // 重新渲染以更新输入框内容和状态

    // 自动聚焦到下一个输入框
    if (val && index < questionsData[currentQuestionIndex].answers.length - 1) {
        const nextInput = inputRefsMap.get(index + 1);
        if (nextInput) {
            nextInput.focus();
        }
    }
}

function handleCharKeyDown(e, index) {
    if (e.key === 'Backspace') {
        if (inputValues[index] === '' && index > 0) {
            inputValues[index - 1] = ''; // 清空前一个
            const prevInput = inputRefsMap.get(index - 1);
            if (prevInput) prevInput.focus();
            e.preventDefault();
        } else if (inputValues[index] !== '') {
            inputValues[index] = ''; // 清空当前
            e.preventDefault();
        }
        feedbackMessage = '';
        isCorrect = null;
        showCorrectAnswer = false;
        render(); // 重新渲染以更新输入框内容和状态
    } else if (e.key === 'ArrowLeft' && index > 0) {
        inputRefsMap.get(index - 1)?.focus();
    } else if (e.key === 'ArrowRight' && index < questionsData[currentQuestionIndex].answers.length - 1) {
        inputRefsMap.get(index + 1)?.focus();
    }
}

function checkAnswer() {
    const currentQ = questionsData[currentQuestionIndex];
    if (!currentQ || !Array.isArray(currentQ.answers) || inputValues.length !== currentQ.answers.length) {
        feedbackMessage = '题目数据未加载或输入框数量不匹配，无法检查。';
        isCorrect = false;
        render();
        return;
    }

    const allFilled = inputValues.every(char => char.trim() !== '');
    if (!allFilled && timeLeft > 0) {
        feedbackMessage = '请填写所有空白处才能检查。';
        isCorrect = false;
        render();
        return;
    }

    if (timerInterval) clearInterval(timerInterval);
    const allCorrect = currentQ.answers.every((correctChar, i) =>
        (inputValues[i] || '').toLowerCase() === correctChar.toLowerCase()
    );
    isCorrect = allCorrect;
    showCorrectAnswer = true;
    feedbackMessage = allCorrect ? '所有填空都正确！' : '部分填空有误，请检查。';
    render(); // 重新渲染以显示结果
}

function goToNext() {
    if (currentQuestionIndex < questionsData.length - 1) {
        currentQuestionIndex++;
        resetQuestionState();
        render(); // 渲染新题目
        // 尝试在 DOM 更新后立即聚焦
        requestAnimationFrame(() => {
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
        // 尝试在 DOM 更新后立即聚焦
        requestAnimationFrame(() => {
            const firstInput = inputRefsMap.get(0);
            if (firstInput) {
                firstInput.focus();
            }
        });
    }
}

function handleInvitationCodeInputKeyDown(event) {
    if (event.key === 'Enter') {
        handleInvitationCodeSubmit();
    }
}

function handleInvitationCodeSubmit() {
    if (invitationCodeInput === INVITATION_CODE) {
        gameState = 'questionTypeSelection';
        invitationCodeError = '';
    } else {
        invitationCodeError = '邀请码错误，请重试。';
    }
    render(); // 重新渲染以更新界面
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

// ==================== 事件绑定与引用收集 ====================
function bindEventListeners() {
    // 欢迎界面
    const invitationCodeInputEl = document.getElementById('invitationCodeInput');
    if (invitationCodeInputEl) {
        // 确保输入框的 oninput 和 onkeydown 事件在 DOM 元素存在时绑定
        invitationCodeInputEl.oninput = (e) => { invitationCodeInput = e.target.value; };
        invitationCodeInputEl.onkeydown = handleInvitationCodeInputKeyDown;
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
            resetQuestionState(); // 重置状态
            render(); // 立即渲染以生成输入框
            // 确保 DOM 更新后立即聚焦第一个输入框
            requestAnimationFrame(() => {
                const firstInput = inputRefsMap.get(0);
                if (firstInput) {
                    firstInput.focus();
                } else {
                    console.warn("Could not focus first input after state change.");
                }
            });
        };
    }

    // 阅读并补全界面 - 填空输入框事件委托
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
        // 为输入框添加点击聚焦事件，防止浏览器/iframe问题
        blanksContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('char-input')) {
                e.target.focus();
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

// 收集输入框的 DOM 引用
function collectInputRefs() {
    inputRefsMap.clear(); // 每次收集前清空
    const charInputs = document.querySelectorAll('.char-input');
    charInputs.forEach(inputEl => {
        const index = parseInt(inputEl.dataset.index);
        if (inputEl && !isNaN(index)) {
            inputRefsMap.set(index, inputEl);
        }
    });
    // 调试辅助
    // console.log("Input refs map after collection:", inputRefsMap);
}

// ==================== 初始化与全局运行 ====================
// 在 DOM 完全加载后首次渲染页面和绑定初始事件
document.addEventListener('DOMContentLoaded', () => {
    render();
    // 尝试在欢迎界面的邀请码输入框自动聚焦
    const invitationInput = document.getElementById('invitationCodeInput');
    if (invitationInput) {
        invitationInput.focus();
    }
});
