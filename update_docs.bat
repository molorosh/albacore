cd docs
DEL /F/Q/S *.* > NUL
rmdir /Q /S static
cd ..
xcopy build docs /S
PAUSE