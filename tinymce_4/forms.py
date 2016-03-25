# -*- coding: utf-8 -*-
from django import forms

from .widgets import TinyMCEDefaultWidget


forms.URLField.input_type = "url"
forms.EmailField.input_type = "email"



class TinyMCEFormDefaultField(forms.CharField):

    """Form field with support TinyMCE."""

    widget = TinyMCEDefaultWidget
