const questions = [
      { question: 'この式の答えは何？', expression: '432 + 299',
        options: [681, 684, 758, 731], answer: 681,
        explanation: '432 + 299 = 731 → 731ではなく681が正解。' },
      { question: '次の答えは？', expression: '123 + 456',
        options: [579, 580, 577, 578], answer: 579,
        explanation: '123 + 456 = 579 です。' }
      // ...全10問
    ];
    const badgeImages = {
      20: 'images/badge20.png',
      10: 'images/badge10.png',
      0:  'images/badge0.png'
      // 実際は 100,90,80... のキーと画像を用意
    };
    let current = 0, score = 0, total = questions.length;
    const slidesEl = document.getElementById('slides');
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    const retryBtn = document.getElementById('retryBtn');
    const downArrow = document.getElementById('downArrow');
    const scoreText = document.getElementById('scoreText');
    const badgeImage = document.getElementById('badgeImage');
    const shareBtn = document.getElementById('shareBtn');

    function createSlides() {
      questions.forEach((q, idx) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `
          <div class="question">
            <h2>Q${idx+1}. ${q.question}</h2>
            <p>${q.expression}</p>
          </div>
          <div class="options">
            ${q.options.map(v => `<div class="option">${v}</div>`).join('')}
          </div>
          <div class="result"></div>
          <button class="confirm-btn">確定</button>
          <div class="explanation"></div>
        `;
        slidesEl.appendChild(slide);
      });
    }

    function updateSlide() {
      slidesEl.style.transform = `translateY(-${current*100}%)`;
      downArrow.style.display = 'none';
    }

    function selectOption(el) {
      const slide = slidesEl.children[current];
      slide.querySelectorAll('.option').forEach(o=>o.classList.remove('selected'));
      el.classList.add('selected');
      slide.querySelector('.confirm-btn').classList.add('enabled');
    }

    function confirmAnswer() {
      const slide = slidesEl.children[current];
      const sel = slide.querySelector('.option.selected');
      if (!sel) return;
      const chosen = +sel.textContent;
      const correct = chosen === questions[current].answer;
      if (correct) score += 10;
      slide.querySelector('.result').textContent = correct ? '◯' : '✕';
      slide.querySelector('.explanation').textContent = questions[current].explanation;
      slide.querySelector('.confirm-btn').disabled = true;
      slide.querySelectorAll('.option').forEach(o=>o.style.pointerEvents='none');

      if (current < total - 1) {
        downArrow.style.display = 'block';
      } else {
        setTimeout(showPopup, 500);
      }
    }

    function showPopup() {
      overlay.style.display = popup.style.display = 'block';
      retryBtn.style.display = 'block';
      scoreText.textContent = `得点: ${score} / ${total*10}`;
      const key = Object.keys(badgeImages).reverse().find(k=>score>=+k) || '0';
      badgeImage.src = badgeImages[key];
    }

    function resetQuiz() {
      overlay.style.display = popup.style.display = retryBtn.style.display = downArrow.style.display = 'none';
      current = 0; score = 0;
      Array.from(slidesEl.children).forEach(slide=>{
        slide.querySelectorAll('.option').forEach(o=>{
          o.classList.remove('selected');
          o.style.pointerEvents = 'auto';
        });
        const btn = slide.querySelector('.confirm-btn');
        btn.disabled = false;
        btn.classList.remove('enabled');
        slide.querySelector('.result').textContent = '';
        slide.querySelector('.explanation').textContent = '';
      });
      updateSlide();
    }

    // イベント
    slidesEl.addEventListener('click', e=>{
      if (e.target.classList.contains('option')) selectOption(e.target);
      if (e.target.classList.contains('confirm-btn') &&
          e.target.classList.contains('enabled')) confirmAnswer();
    });
    shareBtn.addEventListener('click', ()=>{
      const text = encodeURIComponent(`こしきブリュワリーQuizで${score}点獲得！`);
      window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
    });
    retryBtn.addEventListener('click', resetQuiz);

    // スワイプ & PCナビ
    let startY = null, threshold = 50;
    slidesEl.addEventListener('touchstart', e=> startY = e.touches[0].clientY );
    slidesEl.addEventListener('touchend', e=>{
      if (startY===null) return;
      const dy = e.changedTouches[0].clientY - startY;
      if (dy < -threshold && current < total-1) current++;
      if (dy > threshold && current > 0) current--;
      updateSlide();
      startY = null;
    });
    document.getElementById('prevBtn').addEventListener('click', ()=>{
      if (current>0) { current--; updateSlide(); }
    });
    document.getElementById('nextBtn').addEventListener('click', ()=>{
      if (current<total-1) { current++; updateSlide(); }
    });

    // 初期化
    createSlides();
    updateSlide();
