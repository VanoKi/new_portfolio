function screen($url, $extn, $size, $format) 
{
    $url = 'http://mini.s-shot.ru/'.$extn.'/'.$size.'/'.$format.'/?'.urlencode($url);
    $str = file_get_contents($url);
    file_put_contents('screen.'.$format, $str); // тут лучше указать путь куда сохранять
}

screen('http://hashcode.ru', '1024x768', '600', 'jpeg');