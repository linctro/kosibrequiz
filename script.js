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
    question: "こしきブリュワリーのプロジェクトが発足したきっかけは？",
    options: ["島の観光協会からの要請", "インターネット上のWeb3コミュニティ", "とあるラジオ番組の一言", "夢からのお告げ"],
    correct: 1,
    explanation: "web3コミュニティ「カバードピープル」のメンバーから立ち上げたプロジェクトです"
  },
  {
    question: "300人以上の参加者を集めるために使われた特徴的な手段は？",
    options: ["クラウドファンディング", "自転車で日本縦断", "NFTとSNSの組み合わせ", "街頭でチラシ配り"],
    correct: 2,
    explanation: "KDDIのNFTマーケットプレイスより、2022年にプロジェクトNFTを販売し続けており、SNSでの発信を中心に300人以上の関係者に広まっています"
  },
  {
    question: "NFTはこしきブリュワリーの何と紐づいているでしょうか？",
    options: ["島の住民票", "飲み放題パス", "２０００分割された建物パーツ", "ヤギ"],
    correct: 2,
    explanation: "こしきブリュワリーは工場を建設する段階よりはじまり、基礎、ブロック、土台、壁、屋根etc..とNFTと紐づけて可視化しています。NFTは2000分割されており、所有者はその一部の所有感を体験することができます"
  },
  {
    question: "こしきブリュワリーの挑戦のひとつとして正しいものはどれ？",
    options: ["ホップの栽培", "１００キロマラソン", "早寝早起", "仏像彫刻"],
    correct: 0,
    explanation: "甑島のお母さんたちと一緒にホップの栽培を行い、地元産のホップを使ったビールを作ることを目指しています。これにより、地域の農業振興と持続可能なビール生産を実現しようとしています。"
  },
  {
    question: "こしきブリュワリーのボトルラベルはどうやって決める？",
    options: ["専門デザイナーがひとりで決定", "AIがランダムで生成", "コミュニティでの話し合い", "亀の甲羅占い"],
    correct: 2,
    explanation: "こしきブリュワリーのコミュニティー内には様々な職業の人がいる事に驚きます。デザイナーやイラストレーターも所属しており、ラベルをコミュニティで話し合い決定しています。"
  },
  {
    question: "クラフトビールの泡の正体は何？",
    options: ["メレンゲ", "まぼろし", "炭酸ガス", "カニ怪人の技"],
    correct: 2,
    explanation: "クラフトビールの泡は、発酵過程で生成される二酸化炭素が液体中に溶け込み、泡となって現れます。麦芽のたんぱく質などによってコーティングされる事により長持ちしたクリーミーな泡となります"
  },
  {
    question: "こしきブリュワリーのクラフトビールの正しい保管方法は？",
    options: ["冷蔵庫", "常温", "絶対零度", "冷静と情熱の間"],
    correct: 0,
    explanation: "酵母の活動を抑制するため届いたら冷蔵庫で保管するのが最適です。"
  },
  {
    question: "こしきブリュワリーのクラフトビールはどこで買えますか？",
    options: ["コンビニ", "公式ECサイト", "ホームセンター", "ドラッグストア"],
    correct: 1,
    explanation: "こしきブリュワリーのクラフトビールは現在公式ECサイトで購入できます。今後は居酒屋などの飲食店や観光物産店、クラフトビールのイベントからもお届けしていきます。"
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
                    <div class="icon-content"><img class="beer-icon" src="resources/images/kochiki_b_logo_06_fixol_b.webp"></div>
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
  createAndInsertResultSlide(quizIndex, isCorrect);

  // 次のスライド（結果画面）へ
  goToSlide(currentSlide + 1);
}

// 結果スライドを動的生成して挿入
function createAndInsertResultSlide(quizIndex, isCorrect) {
    const container = document.getElementById('quizContainer');
    const currentSlideElement = document.getElementById(`slide-quiz-${quizIndex}`);
    
    // 既存の結果スライドがあれば削除
    const existingResult = document.getElementById(`slide-result-${quizIndex}`);
    if (existingResult) {
        existingResult.remove();
    }
    
    // 新しい結果スライドを作成
    const resultSlide = document.createElement('div');
    resultSlide.className = 'slide';
    resultSlide.id = `slide-result-${quizIndex}`;
    
    const resultIcon = isCorrect ? '⭕' : '❌';
    const resultText = isCorrect ? '正解！' : '不正解';
    const resultClass = isCorrect ? 'correct' : 'incorrect';
    
    resultSlide.innerHTML = `
        <div class="header">
            <div class="question-number">問題 ${quizIndex + 1} の結果</div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${((quizIndex + 1) / quizData.length) * 100}%"></div>
            </div>
        </div>
        <div class="result-content">
            <div class="result-icon">${resultIcon}</div>
            <div class="result-text ${resultClass}">${resultText}</div>
            <div class="explanation">${quizData[quizIndex].explanation}</div>
            ${quizIndex === quizData.length - 1 ? 
                '<button class="confirm-btn active" onclick="showCompletionPopup()">結果を見る</button>' :
                '<div style="color: #666; margin-top: 20px;">下にスワイプして次の問題へ</div>'
            }
        </div>
    `;
    
    // 現在のクイズスライドの直後に挿入
    currentSlideElement.insertAdjacentElement('afterend', resultSlide);
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
  let message = `こしきブリュワリー検定（初級）で${score}点を獲得しました！${badge.icon}\n\n`;

  if (score === 100) {
    message += '完璧です！こしきブリュワリーマスター🍺';
  } else if (score >= 80) {
    message += 'こしきブリュワリー上級者ですね！🍻';
  } else if (score >= 60) {
    message += 'なかなかの知識をお持ちです！🍺';
  } else {
    message += 'これからこしきブリュワリーのクラフトビールを楽しみましょう！🍻';
  }

  message += '\n\n#こしきブリュワリー #クラフトビール #こしきブリュワリー検定 @vtmapida';

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