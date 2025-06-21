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