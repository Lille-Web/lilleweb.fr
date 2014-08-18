<?php
	if($_GET['source'] == 'contact'){
		if (get_magic_quotes_gpc())
		{
			$name = stripslashes($_POST['name']);
			$mail = stripslashes($_POST['mail']);
			$object = stripslashes($_POST['object']);
			$content = stripslashes($_POST['content']);

		}
		else
		{
			$name = $_POST['name'];
			$mail = $_POST['mail'];
			$object = $_POST['object'];
			$content = $_POST['content'];
		}

		$to = 'contact@lille-web.fr';
		$object = '[Contact-LilleWeb] from '.$name.' about : '. $object;

		$msg .= 'Message recu de '.$name."\r\n";
		$msg .= ''."\r\n";
		$msg .= 'Objet : '.$object."\r\n";
		$msg .= 'Email : '.$mail."\r\n";
		$msg .= 'Contenu du message : '.$content."\r\n";
	}elseif($_GET['source'] == 'articleShareExtern'){
		if (get_magic_quotes_gpc())
		{
			$name = stripslashes($_POST['name']);
			$content = stripslashes($_POST['content']);

		}
		else
		{
			$name = $_POST['name'];
			$content = $_POST['content'];
		}
		$mail = "unknown@lille-web.fr";
		$object = "[Lille-Web] Article partagé";
		$to = 'contact@lille-web.fr';
		$object = '[Article-LilleWeb] from '.$name;

		$msg .= 'Article partagé par '.$name."\r\n";
		$msg .= ''."\r\n";
		$msg .= 'Lien : '.$content."\r\n";
	}




	$headers = 'From: '.$name.' <'.$mail.'>'."\r\n\r\n";

	mail($to, $object, $msg, $headers);

	header('Location: '.$_SERVER['HTTP_REFERER']);

?>
