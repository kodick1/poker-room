<?php

function generarLinkWhatsApp($telefono, $mensaje)
{
    $telefono = preg_replace('/\D/', '', $telefono);

    if (!str_starts_with($telefono, '57')) {
        $telefono = '57' . $telefono;
    }

    return 'https://wa.me/' . $telefono . '?text=' . urlencode($mensaje);
}

