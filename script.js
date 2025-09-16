// クイズデータ
const quizDataSets = {
  beginner: [
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
  ],

  intermediate: [
    {
      question: "こしきブリュワリーのクラフトビールが甑島の個性を演出するために加えている物はどれ？",
      options: ["乳製品", "山菜や果実", "朝取り卵", "いかの塩辛"],
      correct: 1,
      explanation: "甑島自生のハマボウフウやキノスと呼ばれる柑橘類などを取り入れた離島の風を感じてもらえるビール作りを目指しています。"
    },
    {
      question: "初期作「フロムスクラッチ」の製法スタイルはどれ？",
      options: ["ラガー", "ピルスナー", "スタウト", "エール"],
      correct: 3,
      explanation: "フロムスクラッチはイギリスの伝統的なエールスタイルで、ホップの苦味と麦芽の甘味で滑らかな飲み口です"
    },
    {
      question: "エール製法で出来上がるクラフトビールの特徴はどれ？",
      options: ["フルーティで豊かな香りと味わい", "キレのあるすっきりした味わい", "ごくごく喉越しを楽しむ", "麦芽やホップが際立つシンプルな味わい"],
      correct: 0,
      explanation: "エールは上面発酵酵母を使用し、比較的高温で発酵させるため、フルーティで豊かな香りと発行による芳醇な味わいが特徴です"
    },

    {
      question: "こしきブリュワリーが発足したコミュニティ「カバードピープル」の理念はどれ？",
      options: ["ルールは破るためにある", "くだらない事にこそ価値がある", "笑顔が世界平和への第一歩", "いつかはみんなでランボルギーニ"],
      correct: 1,
      explanation: "カバードピープルは「くだらない事にこそ価値がある」を理念に掲げ、ユーモアと創造性を重視したライフスタイルブランドを目指します"
    },
    {
      question: "カバードピープルが薩摩川内市で過去に実施していないイベントはどれ？",
      options: ["薩摩川内市ふるさと納税", "駅舎や空港でのNFT展示会", "1000人規模の地域祭り", "裸かるた大会"],
      correct: 3,
      explanation: "いままでNFTを軸としたイベントやハロウィン祭りを薩摩川内市で開催してきました。これにより、デジタルコミュニティとリアル地域コミュニティが繋がる可能性を示してきました"
    },
    {
      question: "NFTを活用して離島にビール工房を創るプロジェクトの正式名称は？",
      options: ["離島ビール工房をデジタル所有証明の仕組みでプラモみたいに創るプロジェクト", "ツンデレ悪役令嬢に島流しにされて原住民とビール工房を建ててみた", "こちら薩摩川内市離島甑島ビール工房", "愛のままに麦芽のままに僕はビール工房を傷つけない"],
      correct: 0,
      explanation: "カバードピープルコミュニティのメンバーで考えたユニークでNFTの説明も兼ねた名称です"
    },
    {
      question: "こしきブリュワリーの建物NFTを販売しているサービスのプラットホームの名称はどれ？",
      options: ["I♡YOU(アイラブユー)", "α夢(あるふぁむ)", "Andrew(アンドリュー)", "αU(アルファユー)"],
      correct: 3,
      explanation: "建物NFTを販売するマーケットプレイス「αU(アルファユー)」はKDDIが運営するNFTマーケットプレイスです"
    },
    {
      question: "NFTを購入する事で得られる「所有感」の表現があてはまるのどれ？",
      options: ["ここ一帯が俺の土地だ", "俺の知らないところで他の男と会うなよな", "俺、離島のビール工房の基礎持ってるんだよね", "俺が冷蔵庫に入れてたプリン食べただろ"],
      correct: 2,
      explanation: "実際のこしきブリュワリーの建物と紐づいたNFTを購入することで、ビール工房の一部を所有している感覚を味わえ自慢できます"
    },
    {
      question: "建材NFT【基礎】の保有者が、自分のNFTの位置特定をする推奨方法はどれ？",
      options: ["基礎レーダーを使う", "コンパスを使う", "甑島の総合案内所に聞く", "水晶玉で探してもらう"],
      correct: 0,
      explanation: "こしきブリュワリーの基礎図を1611分割した【基礎レーダー】で保有している基礎の場所が一目瞭然です"
    },
    {
      question: "こしきブリュワリーが現時点でラベルに記載しているアルコール飲料の種類は？",
      options: ["ハイボール", "発泡酒", "こどもビール", "第３のビール"],
      correct: 1,
      explanation: "2025年6月30日に取得した酒類製造免許により「発泡酒」を記載しています。山菜や香辛料、ハーブなどなど多様な素材を使えるのが発泡酒の特徴です"
    }
  ],

  advanced: [
    {
      question: "甑島の水質がビール作りに与える影響は？",
      options: ["硬水でミネラル豊富", "軟水で繊細な味", "海水の影響", "pH値が特殊"],
      correct: 1,
      explanation: "甑島の軟水は繊細で上品な味わいのビールを作るのに最適で、こしきブリュワリーの特色となっています。"
    },
    {
      question: "クラフトビールの「ブレット」とは何？",
      options: ["ホップの品種", "麦芽の種類", "野生酵母", "添加物"],
      correct: 2,
      explanation: "ブレット（ブレタノマイセス）は野生酵母の一種で、独特のファンキーな風味をビールに与えます。"
    },
    {
      question: "バレルエイジングで使用される樽の種類で最も一般的なのは？",
      options: ["新品のオーク樽", "ウイスキー樽", "ワイン樽", "日本酒樽"],
      correct: 1,
      explanation: "ウイスキー樽は最も一般的で、バニラやカラメルの風味をビールに与える効果があります。"
    },
    {
      question: "アイスビールの製造方法の特徴は？",
      options: ["氷を加える", "冷凍して濃縮", "氷点下で発酵", "氷で冷却"],
      correct: 1,
      explanation: "アイスビールは一部を凍らせて氷を取り除くことで、アルコール度数と風味を濃縮する技法です。"
    },
    {
      question: "ランビックビールの発酵に使用されるのは？",
      options: ["培養酵母のみ", "野生酵母のみ", "乳酸菌のみ", "野生酵母と乳酸菌"],
      correct: 3,
      explanation: "ランビックは野生酵母と乳酸菌による自然発酵で作られる、ベルギーの伝統的なビールです。"
    },
    {
      question: "こしきブリュワリーが目指すビールの哲学は？",
      options: ["世界基準の味", "島の個性を表現", "大量生産効率", "低価格重視"],
      correct: 1,
      explanation: "こしきブリュワリーは甑島の自然と文化を反映した、その土地ならではの個性的なビール作りを哲学としています。"
    },
    {
      question: "グルートビールとは何？",
      options: ["グルテンフリービール", "ホップを使わないビール", "グルコース入りビール", "発酵しないビール"],
      correct: 1,
      explanation: "グルートビールはホップの代わりに香草やスパイスを使用した、中世ヨーロッパの伝統的なビールです。"
    },
    {
      question: "ケトルサワリングとは？",
      options: ["樽での酸性化", "煮沸釜での酸性化", "発酵中の酸性化", "瓶内での酸性化"],
      correct: 1,
      explanation: "ケトルサワリングは煮沸釜で乳酸菌を使って酸味を作る、サワービールの製造技法の一つです。"
    },
    {
      question: "フラッシュペストライゼーションの目的は？",
      options: ["味の向上", "色の変化", "微生物の除去", "アルコール度数の調整"],
      correct: 2,
      explanation: "フラッシュペストライゼーションは短時間の加熱処理で、品質を保ちながら微生物を除去する技術です。"
    },
    {
      question: "甑島テロワールがビールに与える最大の特徴は？",
      options: ["塩味", "甘味", "ミネラル感", "海風の香り"],
      correct: 3,
      explanation: "甑島の海風と自然環境が育む独特のテロワールは、他では味わえない海風の香りをビールに与えます。"
    }
  ]
};

// アプリの状態
let currentSlide = 0;
let userAnswers = [];
let score = 0;
let startY = 0;
let isTransitioning = false;

let currentLevel = 'beginner';
let quizData = quizDataSets[currentLevel];

// 初期化
function init() {
  generateQuizSlides();
  setupTouchEvents();
  updateNavButtons();
}

// 級切り替え機能
function switchLevel(level) {
  currentLevel = level;
  quizData = quizDataSets[level];

  // ボタンのアクティブ状態を更新
  document.querySelectorAll('.level-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(level === 'beginner' ? 'beginnerBtn' :
    level === 'intermediate' ? 'intermediateBtn' : 'advancedBtn').classList.add('active');

  // 背景色とタイトルを更新
  const startSlide = document.getElementById('slide-start');
  const subtitle = document.getElementById('levelSubtitle');
  const title = document.getElementById('levelTitle');

  startSlide.className = `slide active level-${level}`;

  const levelInfo = {
    beginner: {
      subtitle: 'こしきブリュワリー検定 - 初級編',
      title: 'こしきブリュワリーのことを<br>もっと知ろう！'
    },
    intermediate: {
      subtitle: 'こしきブリュワリー検定 - 中級編',
      title: 'クラフトビールの製法と<br>コミュニティをもっと知ろう！'
    },
    advanced: {
      subtitle: 'こしきブリュワリー検定 - 上級編',
      title: 'マスターレベルの<br>専門知識に挑戦！'
    }
  };

  subtitle.textContent = levelInfo[level].subtitle;
  title.innerHTML = levelInfo[level].title;

  // ゲーム状態をリセット
  resetGameState();
}

// ゲーム状態のリセット
function resetGameState() {
  // 既存のクイズスライドを削除
  const existingSlides = document.querySelectorAll('[id^="slide-quiz-"], [id^="slide-result-"]');
  existingSlides.forEach(slide => slide.remove());

  // 状態変数をリセット
  currentSlide = 0;
  userAnswers = [];
  score = 0;

  // 新しいクイズスライドを生成
  generateQuizSlides();
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
  slide.className = `slide level-${currentLevel}`;
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
  resultSlide.className = `slide level-${currentLevel}`;
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
  if (badge.isImage) {
    badgeImage.style.background = 'transparent';
    badgeImage.style.border = '3px solid #FFD700';
    badgeImage.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.5)';
  } else {
    badgeImage.style.background = badge.color;
    badgeImage.style.border = 'none';
    badgeImage.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.3)';
  }

  popup.style.display = 'flex';
}

// 点数に応じたバッジ取得
function getBadgeByScore(score) {
  const badges = {
    beginner: {
      100: { icon: '<img src="resources/images/IMG_4735.jpeg" alt="初級完璧バッジ" style="width: 150%; height: 150%; object-fit: cover; border-radius: 8%;">', color: 'linear-gradient(135deg, #FFD700, #FFA500)', isImage: true },
      80: { icon: '🥈', color: 'linear-gradient(135deg, #C0C0C0, #A0A0A0)', isImage: false },
      60: { icon: '🥉', color: 'linear-gradient(135deg, #CD7F32, #B8860B)', isImage: false },
      default: { icon: '📜', color: 'linear-gradient(135deg, #DDD, #BBB)', isImage: false }
    },
    intermediate: {
      100: { icon: '<img src="resources/images/certificateintermediate.png" alt="中級完璧バッジ" style="width: 150%; height: 150%; object-fit: cover; border-radius: 8%;">', color: 'linear-gradient(135deg, #4169E1, #0000CD)', isImage: true },
      80: { icon: '⭐', color: 'linear-gradient(135deg, #1E90FF, #4682B4)', isImage: false },
      60: { icon: '🔷', color: 'linear-gradient(135deg, #87CEEB, #4682B4)', isImage: false },
      default: { icon: '📘', color: 'linear-gradient(135deg, #B0C4DE, #708090)', isImage: false }
    },
    advanced: {
      100: { icon: '👑', color: 'linear-gradient(135deg, #8B4513, #4A2C2A)', isImage: false },
      80: { icon: '🏅', color: 'linear-gradient(135deg, #A0522D, #8B4513)', isImage: false },
      60: { icon: '🥇', color: 'linear-gradient(135deg, #CD853F, #A0522D)', isImage: false },
      default: { icon: '📙', color: 'linear-gradient(135deg, #DEB887, #BC9A6A)', isImage: false }
    }
  };

  const levelBadges = badges[currentLevel];

  if (score === 100) return levelBadges[100];
  if (score >= 80) return levelBadges[80];
  if (score >= 60) return levelBadges[60];
  return levelBadges.default;
}

// X（Twitter）で共有
function shareToTwitter() {
  const badge = getBadgeByScore(score);
  const iconForShare = badge.isImage ? '🏆' : badge.icon;

  // レベル名を日本語に変換
  const levelNames = {
    'beginner': '初級編',
    'intermediate': '中級編',
    'advanced': '上級編'
  };
  const levelName = levelNames[currentLevel] || currentLevel;

  let message = `こしきブリュワリー検定${levelName}で${score}点を獲得しました！${iconForShare}\n\n`;

  if (score === 100) {
    message += '完璧です！こしきブリュワリーマスター🍺';
  } else if (score >= 80) {
    message += 'こしきブリュワリー上級者ですね！🍻';
  } else if (score >= 60) {
    message += 'なかなかの知識をお持ちです！🍺';
  } else {
    message += 'これからこしきブリュワリーのクラフトビールを楽しみましょう！🍻';
  }

  message += '\n\n#こしきブリュワリー #クラフトビール #こしブリ検定 https://koshiki-brewery-qize.netlify.app/';

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