window.onload = function (){
  var searchStr = window.location.search.slice(1);
  if( searchStr ){
    // $.ajax({url:"搜索接口.txt",success:function(result){
      //虚拟结果
      var search_result = {
        'code':200,
        'data':{
          'total':20000,
          'time' : 2000,
          'list' :[
            {
              'id' : '1',
              'title': '战狼2大电影',
              'content': '战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2',
              'class' : '电影',
              'createTime' : '2017-08-17',
              'fileSize' : '4.12G',
              'hot' : 10,
              'link' : 'www.baidu.com'
            },{
              'id' : '2',
              'title': '战狼2大电影最好看的电影',
              'content': '战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2',
              'class' : '电影',
              'createTime' : '2017-08-17',
              'fileSize' : '4.12G',
              'hot' : 8,
              'link' : 'www.baidu.com'
            },{
              'id' : '3',
              'title': '房间里的书法家战狼2大电影',
              'content': '战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2',
              'class' : '电影',
              'createTime' : '2017-08-17',
              'fileSize' : '4.12G',
              'hot' : 10,
              'link' : 'www.baidu.com'
            },{
              'id' : '4',
              'title': '战狼2发生的发生大电影',
              'content': '战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2',
              'class' : '电影',
              'createTime' : '2017-08-17',
              'fileSize' : '4.12G',
              'hot' : 10,
              'link' : 'www.baidu.com'
            },{
              'id' : '5',
              'title': '战狼2大电影防守打法但是',
              'content': '战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2大电影战狼2',
              'class' : '电影',
              'createTime' : '2017-08-17',
              'fileSize' : '4.12G',
              'hot' : 10,
              'link' : 'www.baidu.com'
            },
          ]
        }
      }
      if( search_result.code == 200 && search_result.data.list.length > 0){
        var arr = [];
        arr.push('<ul class="search_list">')
        var data = search_result.data.list;
        for(var i=0 ; i<data.length ; i++ ){
          arr.push(
            '<li>',
              '<div class="list_title">',
                '<a href="">'+data[i].title+'</a>',
              '</div>',
              '<div class="list_content">',
                '<a href="" >'+data[i].content+'</a>',
              '</div>',
              '<div class="list_footer">',
                '<span class="list_footer_classs">'+data[i].class+'</span>',
                '<span class="list_footer_time">创建时间：<em>'+data[i].createTime+'</em></span>',
                '<span class="list_footer_size">文件大小：<em>'+data[i].fileSize+'</em></span>',
                '<span class="list_footer_hot">热度:<em>'+data[i].hot+'</em></span>',
                '<span class="list_footer_link">磁力链接</span>',
              '</div>',
            '</li>',
          )
        } 
        arr.push('</ul>')
        $('.search_title').html('共找到'+search_result.data.total+'条和战狼有关的结果，共耗时'+search_result.data.time+'秒');
        $('.col-sm-7').html(arr.join(''))
      }
    // }})
  }else{
    $('.search_title').html('没有搜索到任何结果！');
  }


  //搜索框
  $('#search_input').keyup(function(){
    var content = $(this).val();
    if( content == ''){
      $('#search_input_container .search_result').remove();
      return;
    }
    //假装发出请求
    //$.ajax({url:"demo_test.txt",success:function(result){
        var result = {
          'code':200,
          "success":true,
          "data":[
            {
              "content":'内容1',
              //还没想好有啥参数
            },
            {
              "content":'内容2',
              //还没想好有啥参数
            },
            {
              "content":'内容3',
              //还没想好有啥参数
            },
            {
              "content":'内容4',
              //还没想好有啥参数
            },
            {
              "content":'内容5',
              //还没想好有啥参数
            },
            
          ]
        }
        if( result.data.length == 0 ){
          $('#search_input_container .search_result').remove();
          return;
        }
        var arr = ['<ul class="search_result">']
        for(var i=0 ; i<result.data.length ; i++){
          arr.push('<li onclick="window.location.href=\'?'+result.data[i].content+'\'">'+result.data[i].content+'</li>')
        }
        arr.push('</ul>')
        $('#search_input_container .search_result').remove();
        $('#search_input_container').append(arr.join(''));
    //}})
    //假设得到结果
   

  })
}