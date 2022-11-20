$(document).ready(init);

var currentCategoryId = null;
function init(){
	getCategories()

	$("#saveCategoryId").click(function(evt){
		let props = {};
		console.log($("#categoryNameId").val())
		props.name = $("#categoryNameId").val()
		debugger;
		if(currentCategoryId == null){
			saveCategory(props);
	
		} else {
			props.id = currentCategoryId
			updateCategory(props);
			currentCategoryId = null
	
		}
		
	});
}

function saveCategory(props){
	$.ajax({
		method: 'POST',
		url: 'http://localhost:3000/category/add',
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		dataType: "json",
		async: false,
		data: props,
		success: function(res){
			if(res.status == 200){

				getCategories()
				alert("Category Saved Successfully");
				$("#categoryNameId").val('')
				$("#closeBtn").click();
			} else {
				alert("There is something went wrong!!");

			}
		},
		error: function(options){
			throw new Error(options)
		}
	})
}


function updateCategory(props){
	$.ajax({
		method: 'POST',
		url: 'http://localhost:3000/category/update',
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		dataType: "json",
		async: false,
		data: props,
		success: function(res){
			if(res.status == 200){

				getCategories()
				alert("Category Saved Successfully");
				$("#categoryNameId").val('')
				$("#closeBtn").click();
			} else {
				alert("There is something went wrong!!");

			}
		},
		error: function(options){
			throw new Error(options)
		}
	})
}
function getCategories(){
	$.ajax({
		method: 'GET',
		url: 'http://localhost:3000/category/getall',
		data: null,
		success: function(res){
			if(res.status == 200){
				loadRecords(res.response);
			} else {

				alert("Something went Wrong")
				console.error(res.error)
			}
			
		},
		error: function(error){
			console.error(error);
		}
	})
}


function loadRecords(records){
	console.log(records)
	let elements  = '';
	for(let i = 0; i< records.length; i++){
		elements += generateElements(records[i], i)
	}
	$("#table-container").html(elements)
}



function generateElements(item, index){
	return `<tr>
                  <td>${index + 1}</td>
                  <td>${item.name}</td>
                  <td><button class="btn btn-sm btn-warning mr-2" onclick="editRecord(${item.id}, '${item.name}')" data-toggle="modal" data-target="#categoryModel">Edit</button><button class="btn btn-sm btn-danger" onclick="deleteRecord(${item.id})" >Delete</button></td>
                </tr>`
}



function editRecord(id, name){

	currentCategoryId = id;
	$("#categoryNameId").val(name)
}





function deleteRecord(_id){
	
	let props = {
		id: _id
	}
	$.ajax({
		method: 'POST',
		url: 'http://localhost:3000/category/delete',
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		dataType: "json",
		async: false,
		data: props,
		success: function(res){
			if(res.status == 200){

				getCategories()
				alert("Category Deleted Successfully");

			} else {
				alert("There is something went wrong!!");

			}
		},
		error: function(options){
			throw new Error(options)
		}
	})
}



