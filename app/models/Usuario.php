<?php

class Usuario
{
    public static function obtenerTodos()
    {
        return $_SESSION['usuarios'] ?? [];
    }

    public static function guardar($key, $usuario)
    {
        $_SESSION['usuarios'][$key] = $usuario;
    }

    public static function eliminar($key)
    {
        unset($_SESSION['usuarios'][$key]);
    }

    public static function limpiar()
    {
        $_SESSION['usuarios'] = [];
    }

    public static function agregarIngreso($key, $ingreso)
    {
        $_SESSION['usuarios'][$key]['ingresos'][] = $ingreso;
    }
}