window.onload = function(){
  $('#search_input').keyup(function(){
    var content = $(this).val();
    if( content == ''){
      $('.search_box .search_result').remove();
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
          $('.search_box .search_result').remove();
          return;
        }
        var arr = ['<ul class="search_result">']
        for(var i=0 ; i<result.data.length ; i++){
          arr.push('<li onclick="window.location.href=\'search.html?'+result.data[i].content+'\'">'+result.data[i].content+'</li>')
        }
        arr.push('</ul>')
        $('.search_box .search_result').remove();
        $('.search_box').append(arr.join(''));
    //}})
    //假设得到结果
   

  })
}