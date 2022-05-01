let handler = async m => m.reply(`
🏮 *BOT QAYDALARI*

🔖 _Bota zəng etməyin, etsəniz avtomatik olaraq bot tərəfindən bloklanacaqsınız._

🔖 _Əmrlərlə botu spam etməyin, əgər bot cavab vermirsə, bu, ya bot söndürülüb, ya da sahibinin sonunda internet problemi var deməkdir._ 

🔖 _Bot və onun sahibinə qarşı sui-istifadə/hörmətsizlik etməyin._ 

🔖 _Əgər botda hər hansı səhv/xəta görsəniz, !bug/report <problem> əmri ilə bu barədə sahibinə məlumat verin._ 

🔖 _Bu botun qrupunuzda olmasını istəyirsinizsə, !sahibi/yaradıcısı yazaraq sahibi ilə əlaqə saxlayın._

🔖 _Botdan həzz alın və əylənin._

*Botdan düzgün istifadə etməyənlər Admin tərəfindən Ban olacaq*!
`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rules$/i

module.exports = handler
