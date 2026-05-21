<!DOCTYPE html>
<html lang="es">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Control de Ingresos</title>

<link rel="stylesheet" href="/poker-room/public/assets/css/style.css">

</head>

<body>

<div class="container">

    <header>    

    
    <div class="badge">
        ROYAL FLUSH POKER ROOM
    </div>

    <h1 >
        Control de <span>Ingresos</span>
    </h1>

    <p class="subtitle">
        ♠ Control profesional de mesas y jugadores ♦
    </p>

</header>

    <?php if (!empty($mensaje)): ?>

        <div class="alerta <?= $tipo_mensaje ?>">
            <?= htmlspecialchars($mensaje) ?>
        </div>

    <?php endif; ?>

    <?php

    $total_usuarios = count($usuarios);

    $total_ingresos = 0;

    $total_tips = 0;

    $total_transacciones = 0;

   foreach ($usuarios as $u) {                        // ✅ iterar $usuarios
    foreach ($u['ingresos'] as $ing) {
        $total_ingresos += $ing['monto'];
        $total_transacciones++;                    // ✅ contar transacciones aquí

        if (isset($ing['dealer_tip'])) {
            $total_tips += $ing['dealer_tip'];
        }
    }
}

    ?>

    <div class="resumen-bar">

        <div class="resumen-item">
            <div class="resumen-label">Usuarios</div>

            <div class="resumen-valor">
                <?= $total_usuarios ?>
            </div>
        </div>

        <div class="resumen-item">
            <div class="resumen-label">Transacciones</div>

            <div class="resumen-valor">
                <?= $total_transacciones ?>
            </div>
        </div>
        <div class="resumen-item">
    <div class="resumen-label">Dealer Tips</div>
    <div class="resumen-valor">
        $<?= number_format($total_tips, 0) ?>
    </div>
</div>

        <div class="resumen-item">
            <div class="resumen-label">
                Total acumulado
            </div>

            <div class="resumen-valor">
                $<?= number_format($total_ingresos, 2) ?>
            </div>
        </div>

    </div>

    <div class="grid">

        <!-- NUEVO USUARIO -->

        <div class="card">

            <div class="card-title">
                Nuevo usuario
            </div>

            <form method="POST">

                <input
                    type="hidden"
                    name="accion"
                    value="agregar_usuario"
                >

                <label>
                    Nombre del usuario
                </label>

                <input
                    type="text"
                    name="nombre"
                    placeholder="Ej: María García"
                    required
                >

                <label>
                    Número WhatsApp
                </label>

                <input
                    type="text"
                    name="telefono"
                    placeholder="Ej: 573001234567"
                    required
                >

                <p class="hint">
                    ⚠ Sin el símbolo +
                </p>

                <button
                    type="submit"
                    class="btn btn-primary"
                >
                    + Registrar usuario
                </button>

            </form>

        </div>

        <!-- NUEVO INGRESO -->

        <div class="card">

            <div class="card-title">
                Nuevo ingreso
            </div>

            <?php if (empty($usuarios)): ?>

                <p style="color: var(--muted)">
                    Primero registra un usuario
                </p>

            <?php else: ?>

                <form method="POST">

                    <input
                        type="hidden"
                        name="accion"
                        value="agregar_ingreso"
                    >

                    <label>
                        Usuario
                    </label>

                    <select
                        name="usuario_key"
                        required
                    >

                        <option value="">
                            — Seleccionar —
                        </option>

                        <?php foreach ($usuarios as $key => $u): ?>

                            <option value="<?= $key ?>">

                                <?= htmlspecialchars($u['nombre']) ?>

                            </option>

                        <?php endforeach; ?>

                    </select>

                    <label>Dealer Tip</label>

<select name="dealer_tip">
    <option value="no">No</option>
    <option value="si">Sí (+$10.000)</option>
</select>
                    <label>
                        Monto ($)
                    </label>

                    <input
                        type="number"
                        name="monto"
                        step="0.01"
                        required
                    >

                    <label>
    Tipo de pago
</label>

<select name="descripcion" required>

    <option value="">
        — Seleccionar —
    </option>

    <option value="Efectivo">
        💵 Efectivo
    </option>

    <option value="Digital">
        📲 Digital
    </option>

    <option value="Pendiente">
        ⏳ Pendiente
    </option>

</select>

                    <button
                        type="submit"
                        class="btn btn-primary"
                    >
                        💬 Agregar ingreso
                    </button>

                </form>

            <?php endif; ?>

        </div>

    </div>

    <!-- LISTA USUARIOS -->

    <div class="usuarios-section">

        <?php if (empty($usuarios)): ?>

            <div class="no-data">

                ↑ Registra tu primer usuario

            </div>

        <?php else: ?>

            <?php foreach ($usuarios as $key => $usuario): ?>

                <?php

                $ingresos = $usuario['ingresos'];

                $total = array_sum(
                    array_column($ingresos, 'monto')
                );

                ?>

                <div class="usuario-card">

                    <div class="usuario-header">

                        <div>

                            <div class="usuario-nombre">

                                <?= htmlspecialchars($usuario['nombre']) ?>

                            </div>

                            <div class="usuario-tel">

                                +<?= htmlspecialchars($usuario['telefono']) ?>

                            </div>

                        </div>

                        <div class="usuario-stats">

                            <span>
                                Total:
                                <span class="stat-val">

                                    $<?= number_format($total, 2) ?>

                                </span>
                            </span>

                        </div>

                        <div class="usuario-actions">

                            <form
                                method="POST"
                                onsubmit="return confirm('¿Eliminar usuario?')"
                            >

                                <input
                                    type="hidden"
                                    name="accion"
                                    value="eliminar_usuario"
                                >

                                <input
                                    type="hidden"
                                    name="usuario_key"
                                    value="<?= $key ?>"
                                >

                                <button class="btn btn-danger">

                                    ✕ Eliminar

                                </button>

                            </form>

                        </div>

                    </div>

                    <?php if (empty($ingresos)): ?>

                        <div class="empty-state">

                            Sin ingresos registrados

                        </div>

                    <?php else: ?>

                        <table class="ingresos-table">

                            <thead>

                                <tr>

                                    <th>#</th>
                                    <th>Descripción</th>
                                    <th>Dealer Tip</th>
                                    <th>Monto</th>
                                    <th>Fecha</th>

                                </tr>

                            </thead>

                            <tbody>

                                <?php foreach ($ingresos as $i => $ing): ?>

                                   <tr>

    <td>
        <?= $i + 1 ?>
    </td>

    <td>
        <?= htmlspecialchars($ing['descripcion']) ?>
    </td>

    <td>

        <?php if (
            isset($ing['dealer_tip']) &&
            $ing['dealer_tip'] > 0
        ): ?>

            Sí

        <?php else: ?>

            No

        <?php endif; ?>

    </td>

    <td class="monto-cell">

        $<?= number_format($ing['monto'], 2) ?>

    </td>

    <td class="fecha-cell">

        <?= $ing['fecha'] ?>

    </td>

</tr>

                                <?php endforeach; ?>

                            </tbody>

                        </table>

                    <?php endif; ?>

                </div>

            <?php endforeach; ?>

            <div style="text-align:right; margin-top:1rem;">

                <form
                    method="POST"
                    onsubmit="return confirm('¿Eliminar TODO?')"
                >

                    <input
                        type="hidden"
                        name="accion"
                        value="limpiar"
                    >

                    <button class="btn btn-danger">

                        ✕ Limpiar todo

                    </button>

                </form>

            </div>

        <?php endif; ?>

    </div>

</div>

</body>
</html>