
        // Función para cargar y mostrar las tareas
        function cargarTareas() {
            $.ajax({
                url: 'http://localhost/backendTaskApp/routes/TaskRoutes.php',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    var taskList = $('#taskList');
                    taskList.empty(); // Limpia el contenido existente

                    data.forEach(function (task) {
                        var taskStatus = task.STATUS_TASK == 1 ? "Completada" : "No Completada";
                        var taskHtml = `
                            <div class="alert alert-${task.STATUS_TASK == 1 ? 'success' : 'danger'}" role="alert">
                                <h4 class="alert-heading">${task.NAME_TASK}</h4>
                                <p>${task.DESC_TASK}</p>
                                <hr>
                                <p class="mb-0">Estado: ${taskStatus}</p>
                            </div>
                        `;
                        taskList.append(taskHtml);
                    });
                },
                error: function (error) {
                    console.error("Error al cargar las tareas: ", error);
                }
            });
        }

        // Cargar las tareas al cargar la página
        cargarTareas();
