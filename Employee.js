$(document).ready(function () {
  $('#load_data').click(function () {
    $.ajax({
      url: "bizRuntime.csv",
      dataType: "text",
      success: function (data) {
        var employee_data = data.split(/\r?\n|\r/);
        var table_data;
        for (var count = 0; count < employee_data.length; count++) {
          var cell_data = employee_data[count].split(",");
          table_data += '<tr>';
          for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {

            table_data += '<td id="data">' + cell_data[cell_count] + '</td>';
          }
          if (!cell_count < cell_data.length - 1) {
            table_data += '<td>' + '<button class="btn btn-primary edit" >Edit</button>' + '</td>';

            table_data += '<td>' + '<button class="btn btn-danger delete" >Delete</button>' + '</td>';
          }

          table_data += '</tr>';
        }
        $('#employee_table').html(table_data);
      }
    });
    //     success: function (data) {
    //         var employee_data = data.split(/\r?\n|\r/);
    //         var table_data = '<table class="table table-bordered table-striped">';
    //         for (var count = 0; count < employee_data.length; count++) {
    //             var cell_data = employee_data[count].split(",");
    //             table_data += '<tr>';
    //             for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
    //                 if (count === 0) {
    //                     table_data += '<th>' + cell_data[cell_count] + '</th>';
    //                 }
    //                 else {
    //                     table_data += '<td>' + cell_data[cell_count] + '</td>';
    //                 }
    //             }
    //             table_data += '</tr>';
    //         }
    //         table_data += '</table>';
    //         $('#employee_table').html(table_data);
    //     }
    // });

    $('#employee_table').on('click', '.delete', function () {
      $(this).closest('tr').remove();
    });

    $('#employee_table').on('click', '.edit', function () {
      $(this).closest('tr').children("#data").attr('contenteditable', 'true');
      $(this).closest('tr').find(".edit").addClass("save");
      $(this).closest('tr').find(".edit").text('save');
      $(this).closest('tr').find(".edit").removeClass("edit");
      $(this).closest('tr').children("#data").focus();
    });
    $('#employee_table').on('click', '.save', function () {
      $(this).closest('tr').children("#data").attr('contenteditable', 'false');
      $(this).closest('tr').find(".save").text('edit');
      $(this).closest('tr').find(".save").addClass("edit");
      $(this).closest('tr').find(".save").removeClass("save");
    });



  });
  $('#download').on('click', function () {
    window.open("bizRuntime.csv");
    window.open("Wipro.csv");
    window.open("MicroSoft.csv");
    window.open("Google.csv");
    window.open("Tcs.csv");
  });


});




function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        } else if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sort() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
   
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


 // 	$.ajax({
      // 		url:'get_order_data.php',
      // 		type:'post',
      // 		data:{'column':getColumnName,'sortOrder':splitOrder},
      // 		success: function(response){
      // 			if(splitOrder == 'asc')
      // 			{
      // 				getSortHeading.attr('id',splitIDName+'-desc');
      // 			}
      // 			else
      // 			{
      // 				getSortHeading.attr('id',splitIDName+'-asc');
      // 			}	

      // 			$(".table tr:not(:first)").remove();
      // 			$(".table").append(response);
      // 		}
      // 	});

      // });
// $(document).ready(function () {
//   $(".sort-heading").click(function () {

//     //get data-nex-order value
//     var getSortHeading = $(this);
//     var getNextSortOrder = getSortHeading.attr('id');

//     var splitID = getNextSortOrder.split('-');

//     var splitIDName = splitID[0];
//     var splitOrder = splitID[1];

//     //get current td value
//     var getColumnName = getSortHeading.text();

//Material Design example

  //   $('#table table-dark table-hover').DataTable();
  //   $('#table table-dark table-hover_wrapper').find('label').each(function () {
  //     $(this).parent().append($(this).children());
  //   });
  //   $('#table table-dark table-hover_wrapper .dataTables_filter').find('input').each(function () {
  //     const $this = $(this);
  //     $this.attr("placeholder", "Search");
  //     $this.removeClass('form-control-sm');
  //   });
  //   $('#table table-dark table-hover_wrapper .dataTables_length').addClass('d-flex flex-row');
  //   $('#table table-dark table-hover_wrapper .dataTables_filter').addClass('md-form');
  //   $('#table table-dark table-hover_wrapper select').removeClass('custom-select custom-select-sm form-control form-control-sm');
  //   $('#table table-dark table-hover_wrapper select').addClass('mdb-select');
  //   $('#table table-dark table-hover_wrapper .mdb-select').materialSelect();
  //   $('#table table-dark table-hover_wrapper .dataTables_filter').find('label').remove();
  // });


// $('a.yourlink').click(function (e) {
//     e.preventDefault();
//     window.open('Tcs.csv');
//     window.open('bizRuntime.csv');
// });
// $(function () { // On DOM content ready...
//     var hrefs = [];

//     $('.links a').each(function () {
//         hrefs.push(this.href); // Store the URLs from the links...
//     });

//     $('#open-all').click(function () {
//         for (var i in hrefs) {
//             window.open(hrefs[i]); // ...that opens each stored link in its own window when clicked...
//         }
//     });
// });


// $('a.download').click(function (e) {
//     e.preventDefault();
//     window.open("Wipro.csv");
//     window.open("bizRuntime.csv");

//     window.open("MicroSoft.csv");
//     window.open("Google.csv");
//     window.open("Tcs.csv");
// });
// function resetHref() {
//     window.open("Wipro.csv");
//     window.open("bizRuntime.csv");

//     window.open("MicroSoft.csv");
//     window.open("Google.csv");
//     window.open("Tcs.csv");
// }
// function sortTable(n) {
//     var table,
//       rows,
//       switching,
//       i,
//       x,
//       y,
//       shouldSwitch,
//       dir,
//       switchcount = 0;
//     table = document.getElementById("myTable");
//     switching = true;
//     //Set the sorting direction to ascending:
//     dir = "asc";
//     /*Make a loop that will continue until
//     no switching has been done:*/
//     while (switching) {
//       //start by saying: no switching is done:
//       switching = false;
//       debugger;
//       rows = document.getElementById("table table-dark table-hover");
//       /*Loop through all table rows (except the
//       first, which contains table headers):*/
//       for (i = 1; i < rows.length - 1; i++) { //Change i=0 if you have the header th a separate table.
//         //start by saying there should be no switching:
//         shouldSwitch = false;
//         /*Get the two elements you want to compare,
//         one from current row and one from the next:*/
//         x = rows[i].getElementsByTagName("TD")[n];
//         y = rows[i + 1].getElementsByTagName("TD")[n];
//         /*check if the two rows should switch place,
//         based on the direction, asc or desc:*/
//         if (dir == "asc") {
//           if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//             //if so, mark as a switch and break the loop:
//             shouldSwitch = true;
//             break;
//           }
//         } else if (dir == "desc") {
//           if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
//             //if so, mark as a switch and break the loop:
//             shouldSwitch = true;
//             break;
//           }
//         }
//       }
//       if (shouldSwitch) {
//         /*If a switch has been marked, make the switch
//         and mark that a switch has been done:*/
//         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//         switching = true;
//         //Each time a switch is done, increase this count by 1:
//         switchcount++;
//       } else {
//         /*If no switching has been done AND the direction is "asc",
//         set the direction to "desc" and run the while loop again.*/
//         if (switchcount == 0 && dir == "asc") {
//           dir = "desc";
//           switching = true;
//         }
//       }
//     }
//   }

//   function sortTable(n) {
//     var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
//     table = document.getElementById("table");
//     switching = true;
//     dir = "asc";

//     while (switching) {
//         switching = false;
//         rows = table.rows;

//         for (i = 1; i < (rows.length - 1); i++) {
//             shouldSwitch = false;
//             x = rows[i].getElementsByTagName("TD")[n];
//             y = rows[i + 1].getElementsByTagName("TD")[n];

//             if (dir == "asc") {
//                 if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//                     shouldSwitch = true;
//                     break;
//                 }
//             } else if (dir == "desc") {
//                 if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
//                     shouldSwitch = true;
//                     break;
//                 }
//             }
//         }
//         if (shouldSwitch) {
//             rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//             switching = true;
//             switchcount ++;
//         } else {
//             if (switchcount == 0 && dir == "asc") {
//                 dir = "desc";
//                 switching = true;
//             }
//         }
//     }
// }


