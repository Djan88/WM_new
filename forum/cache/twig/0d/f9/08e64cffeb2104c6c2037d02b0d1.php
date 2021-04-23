<?php

/* pagination.html */
class __TwigTemplate_0df908e64cffeb2104c6c2037d02b0d1 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<ul class=\"pagination pull-";
        echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
        echo "\">
";
        // line 2
        if (((isset($context["BASE_URL"]) ? $context["BASE_URL"] : null) && ((isset($context["TOTAL_PAGES"]) ? $context["TOTAL_PAGES"] : null) > 6))) {
            // line 3
            echo "\t<li class=\"dropdown dropup pull-";
            echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
            echo "\">
\t\t<a href=\"#\" title=\"";
            // line 4
            echo $this->env->getExtension('phpbb')->lang("JUMP_TO_PAGE_CLICK");
            echo "\" data-toggle=\"dropdown\" role=\"button\"><span class=\"caret\"></span></a>
\t\t<ul class=\"dropdown-menu panel-body\">
\t\t\t<li>";
            // line 6
            echo $this->env->getExtension('phpbb')->lang("JUMP_TO_PAGE");
            echo $this->env->getExtension('phpbb')->lang("COLON");
            echo "</li>
\t\t\t<li>
\t\t\t\t<form class=\"page-jump-form form-inline\">
\t\t\t\t\t<div class=\"input-group input-group-sm\">
\t\t\t\t\t\t<input type=\"number\" name=\"page-number\" min=\"1\" maxlength=\"6\" title=\"";
            // line 10
            echo $this->env->getExtension('phpbb')->lang("JUMP_PAGE");
            echo "\" class=\"form-control\" data-per-page=\"";
            echo (isset($context["PER_PAGE"]) ? $context["PER_PAGE"] : null);
            echo "\" data-base-url=\"";
            echo twig_escape_filter($this->env, (isset($context["BASE_URL"]) ? $context["BASE_URL"] : null), "html_attr");
            echo "\" data-start-name=\"";
            echo (isset($context["START_NAME"]) ? $context["START_NAME"] : null);
            echo "\" />
\t\t\t\t\t\t<div class=\"input-group-btn\">
\t\t\t\t\t\t\t<input value=\"";
            // line 12
            echo $this->env->getExtension('phpbb')->lang("GO");
            echo "\" type=\"button\" class=\"btn btn-default btn-sm\" />
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</form>
\t\t\t</li>
\t\t</ul>
\t</li>
";
        }
        // line 20
        echo "
";
        // line 21
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute((isset($context["loops"]) ? $context["loops"] : null), "pagination"));
        foreach ($context['_seq'] as $context["_key"] => $context["pagination"]) {
            // line 22
            echo "\t";
            if ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_PREV")) {
                // line 23
                echo "\t<li class=\"previous\"><a href=\"";
                echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_URL");
                echo "\" rel=\"prev\" role=\"button\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("PREVIOUS");
                echo "\"><i class=\"fa fa-chevron-";
                echo (isset($context["S_CONTENT_FLOW_BEGIN"]) ? $context["S_CONTENT_FLOW_BEGIN"] : null);
                echo "\"></i></a></li>
\t";
            } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_CURRENT")) {
                // line 25
                echo "\t<li class=\"active\"><span>";
                echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_NUMBER");
                echo "</span></li>
\t";
            } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_ELLIPSIS")) {
                // line 27
                echo "\t<li class=\"ellipsis disabled\" role=\"separator\"><span>";
                echo $this->env->getExtension('phpbb')->lang("ELLIPSIS");
                echo "</span></li>
\t";
            } elseif ($this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "S_IS_NEXT")) {
                // line 29
                echo "\t<li class=\"next\"><a href=\"";
                echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_URL");
                echo "\" rel=\"next\" role=\"button\" title=\"";
                echo $this->env->getExtension('phpbb')->lang("NEXT");
                echo " \"><i class=\"fa fa-chevron-";
                echo (isset($context["S_CONTENT_FLOW_END"]) ? $context["S_CONTENT_FLOW_END"] : null);
                echo "\"></i></a></li>
\t";
            } else {
                // line 31
                echo "\t<li><a href=\"";
                echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_URL");
                echo "\" role=\"button\">";
                echo $this->getAttribute((isset($context["pagination"]) ? $context["pagination"] : null), "PAGE_NUMBER");
                echo "</a></li>
\t";
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['pagination'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 34
        echo "</ul>
";
    }

    public function getTemplateName()
    {
        return "pagination.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  120 => 34,  98 => 29,  92 => 27,  86 => 25,  69 => 21,  26 => 3,  166 => 37,  148 => 32,  145 => 31,  129 => 26,  126 => 25,  122 => 24,  97 => 19,  93 => 18,  66 => 20,  64 => 13,  50 => 12,  43 => 10,  36 => 6,  33 => 5,  413 => 130,  397 => 121,  391 => 118,  386 => 117,  384 => 116,  375 => 112,  368 => 109,  359 => 105,  352 => 102,  341 => 97,  329 => 93,  321 => 91,  308 => 85,  299 => 83,  295 => 81,  294 => 80,  285 => 78,  274 => 76,  273 => 75,  262 => 73,  239 => 69,  223 => 64,  199 => 60,  196 => 59,  194 => 58,  189 => 57,  187 => 56,  173 => 52,  160 => 49,  157 => 48,  156 => 34,  147 => 46,  141 => 42,  137 => 28,  134 => 39,  125 => 38,  114 => 22,  112 => 35,  109 => 34,  102 => 20,  88 => 29,  68 => 24,  65 => 23,  54 => 20,  49 => 18,  48 => 17,  40 => 15,  24 => 2,  21 => 2,  451 => 122,  448 => 121,  439 => 118,  434 => 116,  429 => 113,  418 => 109,  417 => 132,  404 => 107,  403 => 123,  400 => 105,  396 => 104,  372 => 100,  369 => 99,  365 => 97,  353 => 96,  346 => 99,  345 => 90,  337 => 96,  333 => 84,  319 => 90,  291 => 70,  284 => 68,  277 => 77,  259 => 60,  253 => 59,  247 => 71,  237 => 52,  233 => 50,  232 => 49,  227 => 47,  224 => 46,  219 => 62,  216 => 44,  208 => 42,  206 => 41,  203 => 40,  195 => 38,  193 => 37,  188 => 35,  183 => 54,  179 => 32,  177 => 31,  171 => 30,  161 => 22,  155 => 20,  153 => 19,  150 => 18,  132 => 16,  117 => 37,  106 => 14,  95 => 30,  84 => 12,  62 => 10,  35 => 7,  22 => 2,  1491 => 400,  1488 => 399,  1481 => 395,  1467 => 392,  1463 => 390,  1461 => 389,  1458 => 388,  1446 => 387,  1442 => 385,  1441 => 384,  1438 => 383,  1433 => 380,  1425 => 378,  1423 => 377,  1419 => 376,  1415 => 375,  1410 => 374,  1407 => 373,  1394 => 372,  1392 => 371,  1389 => 370,  1387 => 369,  1383 => 367,  1378 => 364,  1363 => 362,  1359 => 361,  1355 => 360,  1350 => 358,  1343 => 357,  1341 => 356,  1338 => 355,  1326 => 354,  1323 => 353,  1322 => 352,  1319 => 351,  1282 => 349,  1280 => 348,  1277 => 347,  1276 => 346,  1272 => 344,  1271 => 343,  1268 => 342,  1263 => 339,  1258 => 337,  1249 => 336,  1241 => 335,  1239 => 334,  1233 => 332,  1231 => 331,  1228 => 330,  1214 => 328,  1212 => 327,  1209 => 326,  1204 => 324,  1196 => 321,  1188 => 315,  1187 => 314,  1184 => 313,  1175 => 312,  1173 => 311,  1167 => 310,  1164 => 309,  1160 => 307,  1151 => 306,  1147 => 305,  1144 => 304,  1140 => 302,  1131 => 301,  1127 => 300,  1124 => 299,  1121 => 298,  1114 => 297,  1113 => 296,  1110 => 295,  1105 => 292,  1096 => 290,  1092 => 289,  1088 => 288,  1083 => 287,  1081 => 286,  1076 => 284,  1073 => 283,  1065 => 280,  1062 => 279,  1060 => 278,  1057 => 277,  1050 => 273,  1046 => 272,  1042 => 271,  1038 => 270,  1034 => 269,  1028 => 267,  1021 => 263,  1017 => 262,  1013 => 261,  1009 => 260,  1005 => 259,  999 => 257,  997 => 256,  992 => 254,  988 => 252,  985 => 251,  980 => 248,  979 => 247,  976 => 246,  964 => 244,  961 => 243,  951 => 241,  948 => 240,  938 => 238,  935 => 237,  925 => 235,  922 => 234,  912 => 232,  909 => 231,  899 => 229,  897 => 228,  894 => 227,  893 => 226,  887 => 224,  884 => 223,  882 => 222,  857 => 220,  846 => 219,  839 => 214,  837 => 213,  831 => 209,  825 => 208,  792 => 204,  782 => 203,  779 => 202,  776 => 201,  772 => 200,  767 => 198,  762 => 195,  759 => 194,  758 => 193,  755 => 192,  753 => 191,  747 => 190,  737 => 188,  734 => 187,  729 => 186,  728 => 185,  725 => 184,  717 => 182,  714 => 181,  712 => 180,  709 => 179,  699 => 178,  689 => 177,  672 => 176,  669 => 175,  659 => 174,  655 => 172,  647 => 171,  644 => 170,  642 => 169,  639 => 168,  626 => 167,  623 => 166,  622 => 165,  619 => 164,  613 => 163,  599 => 162,  595 => 161,  588 => 159,  575 => 157,  571 => 156,  550 => 155,  547 => 154,  542 => 151,  537 => 149,  532 => 148,  527 => 146,  522 => 145,  520 => 144,  514 => 142,  511 => 141,  501 => 139,  498 => 138,  496 => 137,  492 => 136,  489 => 135,  481 => 130,  477 => 129,  473 => 128,  470 => 127,  466 => 125,  458 => 123,  455 => 122,  449 => 120,  447 => 119,  444 => 118,  442 => 117,  436 => 117,  427 => 112,  425 => 111,  422 => 109,  416 => 108,  414 => 107,  410 => 105,  390 => 104,  387 => 103,  385 => 102,  380 => 99,  374 => 101,  367 => 95,  364 => 94,  342 => 93,  338 => 92,  334 => 95,  331 => 94,  327 => 88,  320 => 87,  314 => 89,  309 => 86,  306 => 75,  304 => 83,  300 => 72,  286 => 79,  280 => 76,  272 => 63,  270 => 74,  265 => 68,  258 => 72,  250 => 61,  246 => 70,  241 => 58,  236 => 56,  231 => 55,  229 => 66,  226 => 65,  214 => 52,  211 => 51,  210 => 50,  207 => 61,  170 => 51,  168 => 46,  165 => 45,  164 => 44,  159 => 35,  154 => 33,  146 => 45,  144 => 35,  140 => 41,  136 => 33,  131 => 32,  128 => 31,  115 => 30,  113 => 29,  110 => 28,  108 => 31,  105 => 26,  101 => 24,  96 => 22,  91 => 21,  83 => 19,  81 => 17,  78 => 16,  76 => 23,  73 => 22,  60 => 9,  57 => 21,  55 => 12,  52 => 19,  46 => 11,  44 => 10,  34 => 14,  31 => 4,  19 => 1,);
    }
}
