# -*- coding: utf-8 -*-

from django import forms
from django.db import models

from .widgets import TinyMCEFullWidget, TinyMCESmallWidget
from .forms import TinyMCEFormDefaultField

class TinyMCEFormField(forms.CharField):

    '''Form field with support TinyMCE.'''

    widget = TinyMCEFullWidget

    def __init__(self, small_tiny=False, *args, **kwargs):
        if small_tiny:
            self.widget = TinyMCESmallWidget
        super(TinyMCEFormField, self).__init__(*args, **kwargs)


class TinyMCEModelField(models.TextField):

    '''Model field with support TinyMCE.'''

    def __init__(self, *args, **kwargs):
        self._small_tiny = kwargs.pop('small_tiny', False)
        self._tinymce_type = kwargs.pop('tinymce_type', False)
        super(TinyMCEModelField, self).__init__(*args, **kwargs)

    def formfield(self, **kwargs):
        kwargs['form_class'] = TinyMCEFormField
        kwargs['widget'] = TinyMCEFullWidget
        if self._small_tiny:
            kwargs['widget'] = TinyMCESmallWidget
        return super(TinyMCEModelField, self).formfield(**kwargs)


class TinyMCEModelDefaultField(models.TextField):

    """Model field with support TinyMCE."""

    def __init__(self, *args, **kwargs):
        self._small_tiny = kwargs.pop('small_tiny', False)
        self._tinymce_type = kwargs.pop('tinymce_type', False)
        super(TinyMCEModelDefaultField, self).__init__(*args, **kwargs)

    def formfield(self, **kwargs):
        kwargs['form_class'] = TinyMCEFormDefaultField
        kwargs['widget'] = TinyMCEFullWidget
        if self._small_tiny:
            kwargs['widget'] = TinyMCESmallWidget
        return super(TinyMCEModelDefaultField, self).formfield(**kwargs)