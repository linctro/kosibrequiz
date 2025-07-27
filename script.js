// クイズデータ
const quizData = [
  {
    question: "こしきブリュワリーがある県はどこ？",
    options: ["北海道", "東京都", "鹿児島県", "兵庫県"],
    correct: 2,
    explanation: "こしきブリュワリーは鹿児島県の離島「甑島」から発信しています"
  },
  {
    question: "甑島の人口は何人くらいでしょう？",
    options: ["4000人", "1万人", "10万人", "50万人"],
    correct: 0,
    explanation: "2025年では約4000人が暮らしています。主に水産業が盛んで、自然環境豊かな島です"
  },
  {
    question: "ラガービールの特徴は？",
    options: ["低温で長期間発酵", "高温で短期間発酵", "常温で発酵", "発酵しない"],
    correct: 0,
    explanation: "ラガービールは低温（7-13℃）で長期間発酵させるビールです。すっきりとした味わいが特徴的です。"
  },
  {
    question: "ホップの役割として正しくないものは？",
    options: ["苦味を与える", "香りを与える", "甘味を与える", "防腐効果"],
    correct: 2,
    explanation: "ホップは苦味、香り、防腐効果をビールに与えますが、甘味は与えません。甘味は主に麦芽から来ます。"
  },
  {
    question: "スタウトビールの色は？",
    options: ["黄金色", "琥珀色", "濃い茶色", "黒色"],
    correct: 3,
    explanation: "スタウトビールは黒色が特徴的です。ローストした大麦麦芽を使用することで、この深い色合いと香ばしい風味が生まれます。"
  },
  {
    question: "ビールの度数で一般的な範囲は？",
    options: ["1-3%", "3-12%", "12-20%", "20-40%"],
    correct: 1,
    explanation: "ビールのアルコール度数は一般的に3-12%の範囲です。軽いビールで3-4%、強いビールで8-12%程度です。"
  },
  {
    question: "エールビールの発酵温度は？",
    options: ["0-5℃", "15-25℃", "30-40℃", "50-60℃"],
    correct: 1,
    explanation: "エールビールは15-25℃の比較的高い温度で発酵させます。この温度により、フルーティーで複雑な風味が生まれます。"
  },
  {
    question: "ビールの泡の役割として正しくないものは？",
    options: ["香りを閉じ込める", "酸化を防ぐ", "見た目を美しくする", "アルコール度数を上げる"],
    correct: 3,
    explanation: "ビールの泡は香りを閉じ込め、酸化を防ぎ、見た目を美しくしますが、アルコール度数には影響しません。"
  },
  {
    question: "ピルスナーの発祥地は？",
    options: ["ドイツ", "チェコ", "ベルギー", "イギリス"],
    correct: 1,
    explanation: "ピルスナーはチェコのピルゼン市で生まれました。1842年に誕生し、現在世界中で愛されているビールスタイルです。"
  },
  {
    question: "クラフトビールの定義に含まれないものは？",
    options: ["小規模生産", "独立性", "伝統的製法", "大量生産"],
    correct: 3,
    explanation: "クラフトビールは小規模生産、独立性、伝統的製法が特徴です。大量生産は大手ビール会社の特徴で、クラフトビールとは対照的です。"
  }
];

// アプリの状態
let currentSlide = 0;
let userAnswers = [];
let score = 0;
let startY = 0;
let isTransitioning = false;

// 初期化
function init() {
  generateQuizSlides();
  setupTouchEvents();
  updateNavButtons();
}

// クイズスライドを動的生成
function generateQuizSlides() {
  const container = document.getElementById('quizContainer');

  // 各クイズ問題のスライド
  quizData.forEach((quiz, index) => {
    const slide = createQuizSlide(quiz, index);
    container.appendChild(slide);

    const resultSlide = createResultSlide(index);
    container.appendChild(resultSlide);
  });
}

// クイズスライド作成
function createQuizSlide(quiz, index) {
  const slide = document.createElement('div');
  slide.className = 'slide';
  slide.id = `slide-quiz-${index}`;

  slide.innerHTML = `
                <div class="header">
                    <div class="question-number">問題 ${index + 1}</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${((index + 1) / quizData.length) * 100}%"></div>
                    </div>
                </div>
                <div class="quiz-content">
                    <div class="beer-icon">🍺</div>
                    <div class="question">${quiz.question}</div>
                    <div class="options">
                        ${quiz.options.map((option, optIndex) =>
    `<div class="option" onclick="selectOption(${index}, ${optIndex})">${option}</div>`
  ).join('')}
                    </div>
                    <button class="confirm-btn" onclick="confirmAnswer(${index})">回答確定</button>
                </div>
            `;

  return slide;
}

// 結果スライド作成
function createResultSlide(index) {
  const slide = document.createElement('div');
  slide.className = 'slide';
  slide.id = `slide-result-${index}`;

  slide.innerHTML = `
                <div class="header">
                    <div class="question-number">問題 ${index + 1} の結果</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${((index + 1) / quizData.length) * 100}%"></div>
                    </div>
                </div>
                <div class="result-content">
                    <div class="result-icon" id="result-icon-${index}">⭕</div>
                    <div class="result-text" id="result-text-${index}">正解！</div>
                    <div class="explanation">${quizData[index].explanation}</div>
                    ${index === quizData.length - 1 ?
      '<button class="confirm-btn active" onclick="showCompletionPopup()">結果を見る</button>' :
      '<div style="color: #666; margin-top: 20px;">下にスワイプして次の問題へ</div>'
    }
                </div>
            `;

  return slide;
}

// クイズ開始
function startQuiz() {
  goToSlide(1);
}

// 選択肢選択
function selectOption(quizIndex, optionIndex) {
  const slide = document.getElementById(`slide-quiz-${quizIndex}`);
  const options = slide.querySelectorAll('.option');
  const confirmBtn = slide.querySelector('.confirm-btn');

  // 選択状態をリセット
  options.forEach(opt => opt.classList.remove('selected'));

  // 新しい選択を適用
  options[optionIndex].classList.add('selected');
  confirmBtn.classList.add('active');

  // 答えを記録
  userAnswers[quizIndex] = optionIndex;
}

// 回答確定
function confirmAnswer(quizIndex) {
  if (userAnswers[quizIndex] === undefined) return;

  const isCorrect = userAnswers[quizIndex] === quizData[quizIndex].correct;
  if (isCorrect) score += 10;

  // 結果スライドを更新
  updateResultSlide(quizIndex, isCorrect);

  // 次のスライド（結果画面）へ
  goToSlide((quizIndex + 1) * 2);
}

// 結果スライド更新
function updateResultSlide(quizIndex, isCorrect) {
  const resultIcon = document.getElementById(`result-icon-${quizIndex}`);
  const resultText = document.getElementById(`result-text-${quizIndex}`);

  if (isCorrect) {
    resultIcon.textContent = '⭕';
    resultText.textContent = '正解！';
    resultText.className = 'result-text correct';
  } else {
    resultIcon.textContent = '❌';
    resultText.textContent = '不正解';
    resultText.className = 'result-text incorrect';
  }
}

// スライド移動
function goToSlide(slideNumber) {
  if (isTransitioning) return;

  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  if (slideNumber < 0 || slideNumber >= totalSlides) return;

  isTransitioning = true;

  slides.forEach((slide, index) => {
    slide.classList.remove('active', 'prev', 'next');

    if (index === slideNumber) {
      slide.classList.add('active');
    } else if (index < slideNumber) {
      slide.classList.add('prev');
    } else {
      slide.classList.add('next');
    }
  });

  currentSlide = slideNumber;
  updateNavButtons();

  setTimeout(() => {
    isTransitioning = false;
  }, 500);
}

// ナビゲーションボタン更新
function updateNavButtons() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const totalSlides = document.querySelectorAll('.slide').length;

  prevBtn.disabled = currentSlide <= 0;
  nextBtn.disabled = currentSlide >= totalSlides - 1;
}

// 前のスライド
function previousSlide() {
  if (currentSlide > 0) {
    goToSlide(currentSlide - 1);
  }
}

// 次のスライド
function nextSlide() {
  const totalSlides = document.querySelectorAll('.slide').length;
  if (currentSlide < totalSlides - 1) {
    goToSlide(currentSlide + 1);
  }
}

// タッチイベント設定
function setupTouchEvents() {
  const container = document.getElementById('quizContainer');

  container.addEventListener('touchstart', handleTouchStart, { passive: true });
  container.addEventListener('touchmove', handleTouchMove, { passive: true });
  container.addEventListener('touchend', handleTouchEnd, { passive: true });
}

function handleTouchStart(e) {
  startY = e.touches[0].clientY;
}

function handleTouchMove(e) {
  // スワイプ中の処理（必要に応じて）
}

function handleTouchEnd(e) {
  if (!startY) return;

  const endY = e.changedTouches[0].clientY;
  const diffY = startY - endY;

  // 50px以上のスワイプで判定
  if (Math.abs(diffY) > 50) {
    if (diffY > 0) {
      // 上方向スワイプ（次のスライドへ）
      nextSlide();
    } else {
      // 下方向スワイプ（前のスライドへ）
      previousSlide();
    }
  }

  startY = 0;
}

// 完了ポップアップ表示
function showCompletionPopup() {
  const popup = document.getElementById('completionPopup');
  const finalScore = document.getElementById('finalScore');
  const completionDate = document.getElementById('completionDate');
  const badgeImage = document.getElementById('badgeImage');

  finalScore.textContent = `${score}点`;

  const now = new Date();
  completionDate.textContent = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日 ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

  // バッジ画像を点数に応じて変更
  const badge = getBadgeByScore(score);
  badgeImage.innerHTML = badge.icon;
  badgeImage.style.background = badge.color;

  popup.style.display = 'flex';
}

// 点数に応じたバッジ取得
function getBadgeByScore(score) {
  if (score === 100) {
    return { icon: '🏆', color: 'linear-gradient(135deg, #FFD700, #FFA500)' };
  } else if (score >= 80) {
    return { icon: '🥈', color: 'linear-gradient(135deg, #C0C0C0, #A0A0A0)' };
  } else if (score >= 60) {
    return { icon: '🥉', color: 'linear-gradient(135deg, #CD7F32, #B8860B)' };
  } else {
    return { icon: '📜', color: 'linear-gradient(135deg, #DDD, #BBB)' };
  }
}

// X（Twitter）で共有
function shareToTwitter() {
  const badge = getBadgeByScore(score);
  let message = `こしきブリュワリーのクラフトビール診断（初級）で${score}点を獲得しました！${badge.icon}\n\n`;

  if (score === 100) {
    message += '完璧です！クラフトビールマスター🍺';
  } else if (score >= 80) {
    message += 'クラフトビール上級者ですね！🍻';
  } else if (score >= 60) {
    message += 'なかなかの知識をお持ちです！🍺';
  } else {
    message += 'これからクラフトビールを楽しみましょう！🍻';
  }

  message += '\n\n#こしきブリュワリー #クラフトビール #ビール診断';

  const url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(message);
  window.open(url, '_blank');
}

// ポップアップを閉じる
function closePopup() {
  document.getElementById('completionPopup').style.display = 'none';
}

// リトライ機能
function restartQuiz() {
  currentSlide = 0;
  userAnswers = [];
  score = 0;


  const allOptions = document.querySelectorAll('.option');
  allOptions.forEach(option => option.classList.remove('selected'));

  const allConfirmBtns = document.querySelectorAll('.conform-btn');
  allConfirmBtns.forEach(btn => {
    if (!btn.textContent.includes('スタート')) {
      btn.classList.remove('active');
    }
  });

  closePopup();

  goToSlide(0);
}
// 外部リンク
function openLink(type) {
  const links = {
    ec: 'https://09969.jp/products/koshikibrewery-the-fast-from-scratch',
    twitter: 'https://x.com/vtmapida',
    instagram: 'https://www.instagram.com/koshiki_brewery/',
    homepage: 'https://09969.jp/pages/koshiki-brewery'
  };

  if (links[type]) {
    window.open(links[type], '_blank');
  }
}

// 初期化実行
window.addEventListener('DOMContentLoaded', init);