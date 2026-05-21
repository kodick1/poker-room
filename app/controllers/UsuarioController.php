<?php

require_once '../app/models/Usuario.php';
require_once '../app/helpers/whatsapp.php';

class UsuarioController
{
    public function index()
    {
        if (!isset($_SESSION['usuarios'])) {
            $_SESSION['usuarios'] = [];
        }

        $mensaje = '';
        $tipo_mensaje = '';

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {

            $accion = $_POST['accion'] ?? '';

            switch ($accion) {

                case 'agregar_usuario':
                    $resultado = $this->agregarUsuario();
                    $mensaje = $resultado['mensaje'];
                    $tipo_mensaje = $resultado['tipo'];
                    break;

                case 'agregar_ingreso':
                    $resultado = $this->agregarIngreso();
                    $mensaje = $resultado['mensaje'];
                    $tipo_mensaje = $resultado['tipo'];
                    break;

                case 'eliminar_usuario':
                    $resultado = $this->eliminarUsuario();
                    $mensaje = $resultado['mensaje'];
                    $tipo_mensaje = $resultado['tipo'];
                    break;

                case 'limpiar':
                    $resultado = $this->limpiar();
                    $mensaje = $resultado['mensaje'];
                    $tipo_mensaje = $resultado['tipo'];
                    break;
            }
        }

        $usuarios = Usuario::obtenerTodos();

        require '../app/views/home.php';
    }

    private function agregarUsuario()
    {
        $nombre = trim($_POST['nombre'] ?? '');
        $telefono = trim($_POST['telefono'] ?? '');

        if ($nombre === '') {
            return [
                'mensaje' => 'Nombre inválido',
                'tipo' => 'error'
            ];
        }

        $key = strtolower($nombre);

        $usuario = [
            'nombre' => $nombre,
            'telefono' => preg_replace('/\D/', '', $telefono),
            'ingresos' => []
        ];

        Usuario::guardar($key, $usuario);

        return [
            'mensaje' => 'Usuario registrado correctamente',
            'tipo' => 'exito'
        ];
    }

    private function agregarIngreso()
    {
        $key = $_POST['usuario_key'] ?? '';
        $monto = $_POST['monto'] ?? '';
        $dealerTip = $_POST['dealer_tip'] ?? 'no';
        $descripcion = trim($_POST['descripcion'] ?? 'Sin descripción');

        if (!is_numeric($monto) || $monto <= 0) {
            return [
                'mensaje' => 'Monto inválido',
                'tipo' => 'error'
            ];
        }

        $tipValor = 0;

if ($dealerTip === 'si') {

    $usuarioActual = $_SESSION['usuarios'][$key];

    foreach ($usuarioActual['ingresos'] as $ingresoExistente) {

        if (
            isset($ingresoExistente['dealer_tip']) &&
            $ingresoExistente['dealer_tip'] > 0
        ) {

            return [
                'mensaje' => 'Este usuario ya tiene un Dealer Tip registrado',
                'tipo' => 'error'
            ];
        }
    }

    $tipValor = 10000;
}

$ingreso = [
    'monto' => (float)$monto,
    'dealer_tip' => $tipValor,
    'descripcion' => $descripcion,
    'fecha' => date('d/m/Y H:i')
];

        Usuario::agregarIngreso($key, $ingreso);

        $usuario = $_SESSION['usuarios'][$key];

        $texto = "💰 *Nuevo ingreso registrado*\n";
$texto .= "👤 Usuario: {$usuario['nombre']}\n";
$texto .= "💵 Monto: $" . number_format($monto, 2) . "\n";

if ($tipValor > 0) {
    $texto .= "💸 Dealer Tip: $10.000\n";
}

$texto .= "📝 Descripción: {$descripcion}\n";
$texto .= "🕐 Fecha: " . date('d/m/Y H:i');

        $linkWhatsApp = generarLinkWhatsApp(
            $usuario['telefono'],
            $texto
        );

        echo "
        <script>
            window.open('$linkWhatsApp', '_blank');
        </script>
        ";

        return [
            'mensaje' => 'Ingreso agregado correctamente',
            'tipo' => 'exito'
        ];
    }

    private function eliminarUsuario()
    {
        $key = $_POST['usuario_key'] ?? '';

        Usuario::eliminar($key);

        return [
            'mensaje' => 'Usuario eliminado',
            'tipo' => 'info'
        ];
    }

    private function limpiar()
    {
        Usuario::limpiar();

        return [
            'mensaje' => 'Datos eliminados',
            'tipo' => 'info'
        ];
    }
}