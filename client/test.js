FlowRouter.route('/test/:_id',{
  action: function() {
    BlazeLayout.render('test');
  }
})

Template.test.helpers({
  contents: function() {
    var _id = FlowRouter.getParam('_id');
    return DB_CONTENTS.findOne({_id: _id});
  }
})

//아냐 진짜배기는 이거야.
