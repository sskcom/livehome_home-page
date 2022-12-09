function AppendChild({
    element = null,
    child_id = null,
    parent_id = null,
    text = null,
    class_value = null,
    value = null,
    type = null,
    Function1 = null,
    Function2 = null,
    placeholder = null
}) {
    const child_node = document.createElement(element);
    if (child_id != null) {
        child_node.id = child_id;
    }
    if (class_value != null) {
        child_node.classList = class_value;
    }
    if (value != null) {
        child_node.value = value;
    }
    if (Function1 != null) {
        child_node.onmouseover = Function1;
    }
    if (Function2 != null) {
        child_node.onmouseout = Function2;
    }
    child_node.textContent = text;
    child_node.type = type;
    if (placeholder != null) {
        child_node.placeholder = placeholder;
    }
    var parent_node = document.getElementById(parent_id);
    parent_node.appendChild(child_node);
}


window.onload = function() {

    AppendChild({
        element: "div",
        child_id: "d_" + 1,
        parent_id: "slide",
        // class_value:"carousel-item active"

    });

    AppendChild({
        element: "div",
        child_id: "d_d_" + 1,
        parent_id: "d_" + 1,
        class_value: "d_d"

    });

    AppendChild({
        element: "img",
        parent_id: "d_d_" + 1,
        child_id: "img_" + 1,
        class_value: "img"

    });

    $('#img_' + 1).attr('src', 'livehome/スライド' + 1 + '.JPG');

    for (var i = 2; i < 50; i++) {

        AppendChild({
            element: "div",
            child_id: "d_" + i,
            parent_id: "slide",
            // class_value:"carousel-item active"

        });

        AppendChild({
            element: "div",
            child_id: "d_d_" + i,
            parent_id: "d_" + i,
            class_value: "d_d"

        });

        AppendChild({
            element: "img",
            parent_id: "d_d_" + i,
            child_id: "img_" + i,
            class_value: "img"


        });

        $('#img_' + i).attr('src', 'livehome/スライド' + i + '.JPG');

    }

    $(" .slick").slick({
        infinite: true, // ループの有効化
        dots: true, // ドットインジケーターの表示
        // fade: true, // フェードアニメーションを有効化
        autoplay: true,
    });
}