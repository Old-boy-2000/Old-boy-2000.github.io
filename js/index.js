// 初始化轮播图
$(document).ready(function () {
    // 轮播图自动播放已通过Bootstrap的data-ride="carousel"属性设置

    // 课程卡片hover效果（现在完全由CSS处理）
    $('.course-card').on('click', function () {
        // 可以在这里添加额外的点击处理逻辑
        console.log('课程卡片被点击');
    });

    // 平滑滚动
    $('a[href^="#"]').on('click', function (e) {
        if (this.hash) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 800);
        }
    });

    // 轮播图调试信息
    $('#mainCarousel').on('slid.bs.carousel', function () {
        console.log('轮播图切换到: ' + $('.item.active img').attr('alt'));
    });
});


// 为轮播图链接添加点击事件
$(document).ready(function () {
    $('#mainCarousel').on('click', '.item a', function (e) {
        e.preventDefault();
        // 这里可以添加点击后的逻辑
        var slideIndex = $(this).parent().index();
        console.log('点击了轮播图第 ' + (slideIndex + 1) + ' 张');
        // window.location.href = $(this).attr('href'); // 实际使用时取消注释
    });
});


// 教师介绍效果
$(document).ready(function () {
    // 触摸设备支持
    $('.teachers-container').on('touchstart', function (e) {
        var startX = e.originalEvent.touches[0].pageX;
        var scrollLeft = $(this).scrollLeft();
        var $this = $(this);

        $(document).on('touchmove.teacherScroll', function (e) {
            var x = e.originalEvent.touches[0].pageX - startX;
            $this.scrollLeft(scrollLeft - x);
            e.preventDefault();
        });

        $(document).on('touchend.teacherScroll', function () {
            $(document).off('touchmove.teacherScroll touchend.teacherScroll');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
  console.log("脚本已加载");
    const container = document.querySelector('.teachers-container');
  const team = document.querySelector('.teachers-scroll');
  const cards = document.querySelectorAll('.teacher-card');
  
  // 1. 自动克隆卡片（实现无缝循环）
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    team.appendChild(clone);
  });

  // 2. 滚动控制
  let scrollPos = 0;
  const speed = 1; // 调节速度 (建议0.5-2)
  let isPaused = false;
  
  function autoScroll() {
    if (!isPaused) {
      scrollPos += speed;
      
      // 到达克隆区域时无缝跳转
      if (scrollPos >= team.scrollWidth / 2) {
        scrollPos = 0;
        team.style.transition = 'none';
        team.style.transform = `translateX(0)`;
        // 强制重绘
        void team.offsetWidth; 
      }
      
      team.style.transition = 'transform 0.1s linear';
      team.style.transform = `translateX(-${scrollPos}px)`;
    }
    requestAnimationFrame(autoScroll);
  }

  // 3. 悬停控制
  container.addEventListener('mouseenter', () => isPaused = true);
  container.addEventListener('mouseleave', () => isPaused = false);

  // 启动滚动
  autoScroll();
});