function wpunity_saveSceneAjax() {

    var postdata = {
        'action': 'wpunity_save_scene_async_action',
        'scene_id': isAdmin == "back" ? phpmyvarC.scene_id : my_ajax_object_savescene.scene_id,
        'scene_json': document.getElementById("wpunity_scene_json_input").value,
//        'available_molecules': document.getElementById("availableMoleculesInput").value,
        'scene_screenshot': document.getElementById("wpunity_scene_sshot").src,
        'scene_title':   document.getElementById("sceneTitleInput").value,
        'scene_description':   document.getElementById("sceneDescriptionInput").value
    };

    jQuery.ajax({
        url: isAdmin == "back" ? 'admin-ajax.php' : my_ajax_object_savescene.ajax_url,
        type: 'POST',
        data: postdata,
        success: function (data) {
            jQuery('#save-scene-button').html("Save scene").removeClass("LinkDisabled");
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("Ajax Save Scene: ERROR: 156" + thrownError);

            jQuery('#save-scene-button').html("Save scene").removeClass("LinkDisabled");

            document.getElementById('save-scene-button').style.backgroundColor = '#FF0000';

            alert("Ajax Save Scene: ERROR: 156" + thrownError);
        }
    });

}

function wpunity_saveGIOApKeyAjax() {

    jQuery.ajax({
        url: isAdmin == "back" ? 'admin-ajax.php' : my_ajax_object_savegio.ajax_url,
        type: 'POST',
        data: {
            'action': 'wpunity_save_gio_async_action',
            'project_id': isAdmin == "back" ? phpmyvarC.project_id : my_ajax_object_savegio.project_id,
            'project_gioApKey': document.getElementById("app-key").value,
            //'scene_screenshot': document.getElementById("wpunity_scene_sshot").value,
            //'scene_title':   document.getElementById("sceneTitleInput").value,
            //'scene_description':   document.getElementById("sceneDescriptionInput").value
        },
        success: function (data) {
            console.log("Ajax Save GIO:" + data);
            //jQuery('#save-scene-button').html("Save scene").removeClass("LinkDisabled");

        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("Ajax Save GIO: ERROR: 156" + thrownError);

            //jQuery('#save-scene-button').html("Save scene").removeClass("LinkDisabled");

            //document.getElementById('save-scene-button').style.backgroundColor = '#FF0000';

            alert("Ajax Save GIO: ERROR: 156" + thrownError);
        }
    });

}

function wpunity_saveExpIDAjax() {

    jQuery.ajax({
        url: isAdmin == "back" ? 'admin-ajax.php' : my_ajax_object_savegio.ajax_url,
        type: 'POST',
        data: {
            'action': 'wpunity_save_expid_async_action',
            'project_id': isAdmin == "back" ? phpmyvarC.project_id : my_ajax_object_savegio.project_id,
            'project_expID': document.getElementById("exp-id").value,
            //'scene_screenshot': document.getElementById("wpunity_scene_sshot").value,
            //'scene_title':   document.getElementById("sceneTitleInput").value,
            //'scene_description':   document.getElementById("sceneDescriptionInput").value
        },
        success: function (data) {
            console.log("Ajax Save ExpID:" + data);
            //jQuery('#save-scene-button').html("Save scene").removeClass("LinkDisabled");

        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("Ajax Save ExpID: ERROR: 156" + thrownError);

            //jQuery('#save-scene-button').html("Save scene").removeClass("LinkDisabled");

            //document.getElementById('save-scene-button').style.backgroundColor = '#FF0000';

            alert("Ajax Save GIO: ExpID: 156" + thrownError);
        }
    });

}

