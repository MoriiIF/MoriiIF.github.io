<script src="https://rmt.dogedoge.com/fetch/~/source/jsdelivr/npm/jquery@latest/dist/jquery.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/gh/sirxemic/jquery.ripples/dist/jquery.ripples.js"></script>
<script>
    $(document).ready(function () {
        try {
            $("#page-header").ripples({
            resolution: 512,
            dropRadius: 10, //px
            perturbance: 0.04,
            });
        } catch (e) {
            $(".error").show().text(e);
        }
    });
</script>