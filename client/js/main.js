const url = 'http://localhost:8080/api/page';

function format(id, title, message) {
    let card = '';
    card += '<li id="post-' + id + '" class="card">';
    card += '<div class="left">' + message + '</div>';
    card += '<div class="right"><div class="button-block"><button class="edit">編集</button><button class="delete">削除</button></div><p class="name">' + title + '</p></div>'
    card += '</li>';
    return card;
}



// 一覧取得
$.ajax({
    type: 'GET',
    url: url
}).done(function(data){
    data = JSON.parse(data)
    data.forEach(function(post) {
        $('#lists').append(format(post[0], post[1], post[2]));
    });
});

$('#post').on('click', () => {
    let title = $('#title').val();
    let message = $('#message').val();

    $.ajax({
        type: 'POST',
        url: url,
        data: {
            "title": title,
            "message": message
        }
    }).done(function(data){
        window.location.reload();
    });
});

$('.card .edit').on('click', () => {
    // TODO: 編集が押された時の処理
    alert('編集が押されました');
});

$('.card .delete').on('click', () => {
    // TODO: 削除が押された時の処理
    alert('削除が押されました');
});